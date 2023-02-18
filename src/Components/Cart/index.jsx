import React from "react";
import {
  Container,
  Wrapper,
  Section,
  Img,
  DELETER,
  Texts,
  Total,
  Table,
} from "./style.js";
import banner from "../../assets/images/banner-02.jpg";
import { useProductsContext } from "../../context/Data/index";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [state, dispatch] = useProductsContext();
  const Navigate = useNavigate();
  const sum = state.cartItems.reduce((accumulator, object) => {
    return (accumulator + object.price) * object.count;
  }, 0);
  return (
    <Container>
      <Wrapper>
        <Section
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
          }}
        >
          <Section.Header>
            <Section.Headertext>Your Cart</Section.Headertext>
          </Section.Header>
        </Section>
        {state?.cartItems?.length >= 1 ? (
          <Table>
            <thead>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th>Image</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {state?.cartItems?.map((value, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Img src={value?.image01} />
                    </td>

                    <td>
                      <Texts>{value?.title}</Texts>
                    </td>
                    <td>
                      <Texts>{value?.price}</Texts>
                    </td>
                    <td>
                      <Texts>{value?.count}</Texts>
                    </td>
                    <td>
                      <DELETER
                        onClick={() =>
                          dispatch({ type: "onDelete", payload: value?.id })
                        }
                      >
                        Delete
                      </DELETER>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p>Your cart is empty</p>
        )}
      </Wrapper>
      <Total>
        <Total.Text>
          Total: $<Table.Span>{sum}+30</Table.Span>$ For Shipping
        </Total.Text>
        <Total.Text>
          Taxes and shipping will be calculated at checkout
        </Total.Text>
        <Total.Btns>
          <Total.Btn onClick={() => Navigate("/foods")}>
            Continue Shopping
          </Total.Btn>
          <Total.Btn onClick={() => Navigate("/checkout")}>
            Procced to Checkout
          </Total.Btn>
        </Total.Btns>
      </Total>
    </Container>
  );
};

export default Cart;
