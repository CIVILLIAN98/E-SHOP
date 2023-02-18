import { createContext, useContext, useReducer } from "react";

import products from "../../utilitis/products";
import { reducer } from "./reducer";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

const initialstate = JSON.parse(localStorage.getItem("data")) || {
  data: products,
  cartItems: [],
  wishList: [],
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,

    initialstate
  );

  localStorage.setItem("data", JSON.stringify(state));

  

  return (
    <>
      <ProductsContext.Provider value={[state, dispatch]}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};
export default ProductsContextProvider;
