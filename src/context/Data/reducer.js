import products from "../../utilitis/products";

export const reducer = (state, action) => {
  switch (action.type) {
    case "onSearch":
      let res = products?.filter((val) =>
        val?.title.toLowerCase()?.includes(action.payload)
      );

      return {
        data: res,
        cartItems: [...state.cartItems],
        wishList: [...state.wishList],
      };

    case "onSelect":
      if (action.payload === "high-price") {
        const sortBypriceCart = state.data.sort(
          (itemA, itemB) => itemB?.price - itemA?.price
        ); // sort descending by price
        const expensiveOrder = sortBypriceCart;
        return {
          ...state,
          data: expensiveOrder,
          cartItems: [...state.cartItems],
          wishList: [...state.wishList],
        };
      } else if (action.payload === "low-price") {
        const sortBypriceCart = state.data.sort(
          (itemA, itemB) => itemA?.price - itemB?.price
        ); // sort descending by price
        const cheapOrder = sortBypriceCart;
        return {
          ...state,
          data: cheapOrder,
          cartItems: [...state.cartItems],
          wishList: [...state.wishList],
        };
      } else if (action.payload === "Default") {
        let sortByDefault = state.data.sort(
          (itemA, itemB) => itemA?.id - itemB?.id
        ); // sort by default
        return {
          ...state,
          data: sortByDefault,
          cartItems: [...state.cartItems],
          wishList: [...state.wishList],
        };
      } else if (action.payload === "ascending") {
        let sortByDefault = products?.sort((a, b) =>
          a.title > b.title ? 1 : -1
        ); // sort Alphabetically, A-Z
        return {
          ...state,
          data: sortByDefault,
          cartItems: [...state.cartItems],
          wishList: [...state.wishList],
        };
      } else if (action.payload === "descending") {
        let sortByDefault = products?.sort((a, b) =>
          b.title > a.title ? 1 : -1
        ); // sort Alphabetically, A-Z
        return {
          ...state,
          data: sortByDefault,
          cartItems: [...state.cartItems],
          wishList: [...state.wishList],
        };
      }
      break;
    case "ADD_TO_CART":
      let Cart_Items = [...state.cartItems, action.payload];

      let Log = [...new Set(Cart_Items)];

      return {
        ...state,
        data: [...state.data],
        cartItems: Log,
        wishList: [...state.wishList],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        data: [...state.data],
        cartItems: [...state.cartItems],
        wishList: [...state.wishList, action.payload],
      };
    case "onDelete":
      let cartDelete = {
        ...state,
        data: [...state.data],
        cartItems: [...state.cartItems].filter(
          (val) => val.id !== action?.payload
        ),
        wishList: [...state.wishList],
      };
      return cartDelete;
    case "increment":
      let Increment = [...state.cartItems].map((val) =>
        val.id === action.payload ? { ...val, count: val.count + 1 } : val
      );
      return {
        ...state,
        data: [...state.data],
        cartItems: Increment,
        wishList: [...state.wishList],
      };
    case "decrement":
      let Decrement = [...state.cartItems].map((val) =>
        val.id === action.payload
          ? { ...val, count: val.count >= 1 && val.count - 1 }
          : val
      );
      return {
        ...state,
        data: [...state.data],
        cartItems: Decrement,
        wishList: [...state.wishList],
      };

    //Default case return value
    default:
      return state;
  }

  //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
};
