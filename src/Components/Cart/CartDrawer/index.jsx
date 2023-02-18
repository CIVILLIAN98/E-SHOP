import React from "react";
import { Drawer } from "antd";
import { useCartDrawer } from "../../../context/CartDrawerProvider";
import { useProductsContext } from "../../../context/Data";
import { CartFooter, Product } from "./style";
import { useNavigate } from "react-router-dom";

export const CartDrawer = () => {
  const [openDrawer, setOpenDrawer] = useCartDrawer();
  const [state, dispatch] = useProductsContext();

  const sum = state.cartItems.reduce((accumulator, object) => {
    return (accumulator + object.price) * object.count;
  }, 0);
  const Navigate = useNavigate();
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <Drawer
        title="Cart"
        placement="right"
        onClose={onClose}
        open={openDrawer}
      >
        <CartFooter style={{ background: "red" }}>
          <CartFooter.TotalPrice> Total: {sum}$</CartFooter.TotalPrice>{" "}
          <CartFooter.Btn onClick={() => Navigate("/checkout")}>
            checkout
          </CartFooter.Btn>
        </CartFooter>
        {state?.cartItems?.map((value, index) => {
          return (
            <Product key={index}>
              <div>
                <Product.Img src={value?.image01} />
                <Product.Price>{value?.count * value?.price}$ </Product.Price>
              </div>
              <Product.Texts>
                <Product.Price>{value?.title}</Product.Price>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <Product.Btn
                    onClick={() =>
                      dispatch({ type: "increment", payload: value?.id })
                    }
                  >
                    +
                  </Product.Btn>
                  <Product.Price>X{value?.count}</Product.Price>
                  <Product.Btn
                    onClick={() =>
                      dispatch({ type: "decrement", payload: value?.id })
                    }
                  >
                    -
                  </Product.Btn>
                </div>
              </Product.Texts>

              <Product.Btn
                onClick={() =>
                  dispatch({ type: "onDelete", payload: value?.id })
                }
              >
                X
              </Product.Btn>
            </Product>
          );
        })}
      </Drawer>
    </div>
  );
};
