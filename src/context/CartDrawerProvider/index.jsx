import React, { createContext, useContext, useState } from "react";

export const CartDrawerContext = createContext();
export const useCartDrawer = () => useContext(CartDrawerContext);

const CartDrawerContextProvider = ({ children }) => {
  const [opencartDrawer, setOpencartDrawer] = useState(false);

  return (
    <CartDrawerContext.Provider value={[opencartDrawer, setOpencartDrawer]}>
      {children}
    </CartDrawerContext.Provider>
  );
};
export default CartDrawerContextProvider;
