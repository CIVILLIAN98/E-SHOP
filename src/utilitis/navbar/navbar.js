import Home from "../../Components/Home/index";
import Foods from "../../Components/Foods/index";
import Cart from "../../Components/Cart/index";
import Contact from "../../Components/Contact/index";
import Login from "../../Components/Login/index";
import Register from "../../Components/Register/index";
import Product from "../../Components/Product/index";
import Checkout from "../../Components/Checkout";
export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Home />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: "Foods",
    path: "/foods",
    element: <Foods />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 3,
    title: "Cart",
    path: "/cart",
    element: <Cart />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    element: <Contact />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 5,
    title: "Login",
    path: "/login",
    element: <Login />,
    isPrivate: false,
    hidden: true,
  },
  {
    id: 6,
    title: "Register",
    path: "/register",
    element: <Register />,
    isPrivate: false,
    hidden: true,
  },
  {
    id: 7,
    title: "Product",
    path: "/foods/:id",
    element: <Product />,
    isPrivate: true,
    hidden: true,
  },
  {
    id: 8,
    title: "Checkout",
    path: "/checkout",
    element: <Checkout />,
    isPrivate: true,
    hidden: true,
  },
];
