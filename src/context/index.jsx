import React from "react";
import CartDrawerContextProvider from "./CartDrawerProvider";
import ProductsContextProvider from "./Data";
import NavMenuContextProvider from "./navMenu";

const Context = ({ children }) => {
  return (
    <NavMenuContextProvider>
      <CartDrawerContextProvider>
        <ProductsContextProvider>{children}</ProductsContextProvider>
      </CartDrawerContextProvider>
    </NavMenuContextProvider>
  );
};

export default Context;
