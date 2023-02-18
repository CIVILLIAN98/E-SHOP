import React from "react";
import { Container, Logo, Nav, Wrapper, Icons } from "./style";
import logo from "../../assets/images/Logo.png";
import { navbar } from "../../utilitis/navbar/navbar";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "../../Hook/UseMediaQuery";
import { NavMenu } from "./NavMenu";
import { useNavMenuContext } from "../../context/navMenu";
import { CartDrawer } from "../Cart/CartDrawer";
import { useCartDrawer } from "../../context/CartDrawerProvider";
import { useProductsContext } from "../../context/Data";
const Navbar = () => {
  const navigate = useNavigate();
  let isPageWide = useMediaQuery("(max-width: 884px)");
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext();
  const [opencartDrawer, setOpencartDrawer] = useCartDrawer();
  const [state] = useProductsContext();
  return (
    <Container>
      <Nav>
        <Nav.Column>
          <Nav.Column.Wrapper>
            <Nav.Logo>
              <Logo
                src={logo}
                alt="logo"
                width={"50px"}
                height={50}
                loading="lazy"
                onClick={() => navigate("/home")}
              />
              <Nav.Column.Title>Tasty Treat</Nav.Column.Title>
            </Nav.Logo>
          </Nav.Column.Wrapper>
        </Nav.Column>
        {!isPageWide && (
          <Nav.Column>
            <Nav.Column.Headers>
              {navbar?.map((navlink) => {
                return (
                  !navlink?.hidden && (
                    <NavLink
                      key={navlink?.id}
                      to={navlink?.path}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "black",
                          fontSize: isActive ? "25px" : "22px",
                        };
                      }}
                    >
                      {navlink?.title}
                    </NavLink>
                  )
                );
              })}
            </Nav.Column.Headers>
          </Nav.Column>
        )}

        <Nav.Column>
          <Icons>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={state?.cartItems.length} color="secondary">
                <ShoppingCartIcon
                  onClick={() => setOpencartDrawer(!opencartDrawer)}
                  color="action"
                />
              </Badge>
              <Badge color="success">
                <AccountCircleIcon
                  onClick={() => navigate("/login")}
                  color="action"
                />
              </Badge>
              {isPageWide && (
                <MenuIcon
                  onClick={() => setOpenNavMenu(!openNavMenu)}
                  color="action"
                />
              )}
            </Stack>
          </Icons>
        </Nav.Column>
      </Nav>
      <Wrapper>
        <CartDrawer />
        <NavMenu />
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
