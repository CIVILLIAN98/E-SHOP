import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../context/Data";
import { Product, ProductContainer } from "../Home/style";
import { Container, SearchCon, Section } from "./style";
import banner from "../../assets/images/banner-02.jpg";
export const Foods = () => {
  const [state, dispatch] = useProductsContext();
  const Navigate = useNavigate();

  return (
    <Container>
      <Section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
        }}
      >
        <Section.Header>
          <Section.Headertext>All Foods</Section.Headertext>
        </Section.Header>
      </Section>
      <SearchCon>
        <SearchCon.Input
          type="text"
          placeholder="I AM LOOKING FOR..."
          onChange={(e) =>
            dispatch({ type: "onSearch", payload: e.target.value })
          }
        />

        <SearchCon.Select
          onChange={(e) =>
            dispatch({ type: "onSelect", payload: e.target.value })
          }
        >
          <option>Default</option>
          <option value="ascending">Alphabetically, A-Z</option>
          <option value="descending">Alphabetically, Z-A</option>
          <option value="high-price">High Price</option>
          <option value="low-price">Low Price</option>
        </SearchCon.Select>
      </SearchCon>
      <section>
        <div>
          <h2>All Foods</h2>
          <ProductContainer>
            {state?.data?.map((product, index) => (
              <Product key={product?.id || index}>
                <Product.Img
                  onClick={() => Navigate(`/foods/:${product?.id}`)}
                  src={product?.image03}
                  alt={product?.title}
                />

                <Product.Header>{product?.title}</Product.Header>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Product.Price>{product?.price}$</Product.Price>
                  <Product.Btn
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      })
                    }
                  >
                    Add to cart
                  </Product.Btn>
                </div>
              </Product>
            ))}
          </ProductContainer>
        </div>
      </section>
    </Container>
  );
};
export default Foods;
