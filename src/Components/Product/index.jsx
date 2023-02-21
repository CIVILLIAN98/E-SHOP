import React from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/Data";
import { Container, Wrapper, ProductCon } from "./style";

export const Product = () => {
  const [state, dispatch] = useProductsContext();
  const params = useParams();
  const paramID = params.id.replace(":", "");
  console.log(state?.data?.filter((val) => val.id === paramID));
  return (
    <Container>
      {state?.data
        ?.filter((val) => val.id === paramID)
        .map((product) => {
          return (
            <Wrapper key={product?.id}>
              <ProductCon>
                <ProductCon.Img src={product?.image01} />
                <ProductCon.Texts>
                  <ProductCon.Price>{product?.title}</ProductCon.Price>
                  <ProductCon.Desc>{product?.desc}</ProductCon.Desc>
                  <ProductCon.Box>
                    <ProductCon.Btn
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                    >
                      Add to cart
                    </ProductCon.Btn>
                    <ProductCon.P> 1 X {product?.price}$</ProductCon.P>
                  </ProductCon.Box>
                </ProductCon.Texts>
              </ProductCon>
            </Wrapper>
          );
        })}
    </Container>
  );
};
export default Product;
