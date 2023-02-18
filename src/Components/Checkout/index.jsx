import React from "react";
import {
  Container,
  Wrapper,
  SHippingCon,
  Box1Header,
  Box1Input,
  Box1Btn,
  Box2text,
  Box2Total,
} from "./style";
import banner from "../../assets/images/banner-02.jpg";
import { useProductsContext } from "../../context/Data/index";
const Checkout = () => {
  const [state] = useProductsContext();
  const sum = state.cartItems.reduce((accumulator, object) => {
    return (accumulator + object.price) * object.count;
  }, 0);
  return (
    <Container>
      <Wrapper>
        <section
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
          }}
        >
          <div style={{ padding: "18px" }}>
            <h2 style={{ color: "white" }}>Checkout</h2>
          </div>
        </section>
        <SHippingCon>
          <SHippingCon.Box1>
            <form action="" style={{ width: "100%" }}>
              <Box1Header>Shipping Adress</Box1Header>
              <SHippingCon.Inputs>
                <Box1Input placeholder="Enter your name" />
              </SHippingCon.Inputs>
              <SHippingCon.Inputs>
                <Box1Input type={"email"} placeholder="Enter your email" />
              </SHippingCon.Inputs>
              <SHippingCon.Inputs>
                <Box1Input type={"number"} placeholder="Phone number" />
              </SHippingCon.Inputs>
              <SHippingCon.Inputs>
                <Box1Input placeholder="Country" />
              </SHippingCon.Inputs>
              <SHippingCon.Inputs>
                <Box1Input placeholder="City" />
              </SHippingCon.Inputs>
              <SHippingCon.Inputs>
                <Box1Input placeholder="Postal code" />
              </SHippingCon.Inputs>
              <Box1Btn>Payment</Box1Btn>
            </form>
          </SHippingCon.Box1>
          <SHippingCon.Box2>
            <div
              style={{
                width: "100%",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                marginBottom: "20px",
              }}
            >
              <Box2text>
                Total: <span style={{ color: "black" }}>${sum}</span>
              </Box2text>
              <Box2text>
                Shipping: <span style={{ color: "black" }}>$30</span>
              </Box2text>
            </div>
            <Box2Total>
              Total: <span style={{ color: "black" }}>${sum + 30}</span>
            </Box2Total>
          </SHippingCon.Box2>
        </SHippingCon>
      </Wrapper>
    </Container>
  );
};
export default Checkout;
