import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Wrapper, ProductContainer, Product } from "./style";
import { useProductsContext } from "../../../context/Data";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const PopularFoods = () => {
  const [value, setValue] = useState(0);
  const Navigate = useNavigate();
  const [state, dispatch] = useProductsContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Wrapper>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              color: "white",
              borderBottom: 1,
              borderColor: "divider",
              background: "red",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="BURGER" {...a11yProps(1)} />
              <Tab label="PIZZA" {...a11yProps(2)} />
              <Tab label="BREAD" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProductContainer>
              {state?.data?.map((product, index) => (
                <Product key={product?.id || index}>
                  <Product.Img
                    onClick={() => Navigate(`/foods/:${product?.id}`)}
                    src={product?.image01}
                    alt={product?.title}
                  />
                  <h5 style={{ textAlign: "center" }}>{product?.title}</h5>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <Product.Price>{product?.price}$</Product.Price>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Product.Btn
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: product,
                          })
                        }
                      >
                        wishlist
                      </Product.Btn>
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
                  </div>
                </Product>
              ))}
            </ProductContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductContainer>
              {state?.data
                ?.filter((val) => val?.category.toLowerCase() === "burger")
                .map((product, index) => (
                  <Product key={product?.id || index}>
                    <Product.Img
                      onClick={() => Navigate(`/foods/:${product?.id}`)}
                      src={product?.image01}
                      alt={product?.title}
                    />
                    <h5 style={{ textAlign: "center" }}>{product?.title}</h5>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Product.Price>{product?.price}$</Product.Price>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <Product.Btn
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: product,
                            })
                          }
                        >
                          wishlist
                        </Product.Btn>
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
                    </div>
                  </Product>
                ))}
            </ProductContainer>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ProductContainer>
              {state?.data
                ?.filter((val) => val?.category.toLowerCase() === "pizza")
                .map((product, index) => (
                  <Product
                    onClick={() => Navigate(`/foods/:${product?.id}`)}
                    key={product?.id || index}
                  >
                    <Product.Img src={product?.image01} alt={product?.title} />
                    <h5 style={{ textAlign: "center" }}>{product?.title}</h5>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Product.Price>{product?.price}$</Product.Price>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <Product.Btn
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: product,
                            })
                          }
                        >
                          wishlist
                        </Product.Btn>
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
                    </div>
                  </Product>
                ))}
            </ProductContainer>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ProductContainer>
              {state?.data
                ?.filter((val) => val?.category.toLowerCase() === "bread")
                .map((product, index) => (
                  <Product key={product?.id || index}>
                    <Product.Img
                      onClick={() => Navigate(`/foods/:${product?.id}`)}
                      src={product?.image01}
                      alt={product?.title}
                    />
                    <h5 style={{ textAlign: "center" }}>{product?.title}</h5>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Product.Price>{product?.price}$</Product.Price>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <Product.Btn
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: product,
                            })
                          }
                        >
                          wishlist
                        </Product.Btn>
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
                    </div>
                  </Product>
                ))}
            </ProductContainer>
          </TabPanel>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default PopularFoods;
