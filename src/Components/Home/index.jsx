import React from "react";
import {
  Container,
  Main,
  Wrapper,
  ArticleCon,
  MainImg,
  Mainbtn1,
  Mainbtn2,
  Categories,
  Section,
  AdvantagesCon,
  PopularFoodsCon,
  WhyTastyTreatCon,
  HotPizzaCon,
  ProductContainer,
  Product,
  TestimonialsCon,
} from "./style";
import hero from "../../assets/images/hero.png";
import fastfood from "../../assets/images/category-01.png";
import pizza from "../../assets/images/category-02.png";
import asian_food from "../../assets/images/category-03.png";
import row_meat from "../../assets/images/category-04.png";
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import DeliveryDiningTwoToneIcon from "@mui/icons-material/DeliveryDiningTwoTone";
import RoomServiceRoundedIcon from "@mui/icons-material/RoomServiceRounded";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import PopularFoods from "./PoPuLarFoods/popularFoods";
import location from "../../assets/images/location.png";
import { useProductsContext } from "../../context/Data";
import network from "../../assets/images/network.png";
import TextMobileStepper from "./TestimolsCarousel";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const Navigate = useNavigate();
  const [state, dispatch] = useProductsContext();
  return (
    <Container>
      <Wrapper>
        <ArticleCon>
          <Main>
            <Main.Toptext>Easy way to make an order</Main.Toptext>
            <Main.Header>
              <span style={{ color: "red" }}> HUNGRY?</span> Just wait <br />{" "}
              food at
              <span style={{ color: "red" }}> your door</span>
            </Main.Header>
            <Main.SubHeadertxt>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </Main.SubHeadertxt>
            <Main.Btns>
              <Mainbtn1 onClick={() => Navigate("/foods")}>Order now</Mainbtn1>
              <Mainbtn2>
                <a href="/foods">See all foods</a>
              </Mainbtn2>
            </Main.Btns>
            <Main.BottomIcons>
              <Main.BottomIconstxt>
                <DriveEtaRoundedIcon
                  style={{
                    color: "white",
                    border: "5px solid red",
                    borderRadius: "25px",
                    background: "red",
                  }}
                />
                No shipping charge
              </Main.BottomIconstxt>
              <Main.BottomIconstxt>
                <VerifiedUserRoundedIcon
                  style={{
                    color: "white",
                    border: "5px solid red",
                    borderRadius: "25px",
                    background: "red",
                  }}
                />
                100% secure checkout
              </Main.BottomIconstxt>
            </Main.BottomIcons>
          </Main>
          <MainImg>
            <Main.IMG src={hero} alt="asdasd" />
          </MainImg>
        </ArticleCon>
        <Categories>
          <Categories.Category>
            <Categories.Img src={fastfood} alt="Fastfood" />{" "}
            <Categories.Text>Fastfood</Categories.Text>
          </Categories.Category>
          <Categories.Category>
            <Categories.Img src={pizza} alt="Pizza" />{" "}
            <Categories.Text>Pizza</Categories.Text>
          </Categories.Category>
          <Categories.Category>
            <Categories.Img src={asian_food} alt="Asian Food" />{" "}
            <Categories.Text>Asian Food</Categories.Text>
          </Categories.Category>
          <Categories.Category>
            <Categories.Img src={row_meat} alt="Row Meat" />
            <Categories.Text>Row Meat</Categories.Text>
          </Categories.Category>
        </Categories>
        <Section>
          <Section.Header>
            <Section.Headertoptxt>What we serve</Section.Headertoptxt>
            <Section.HeaderMainTxt>Just sit back at home</Section.HeaderMainTxt>
            <Section.HeaderMainTxt>
              we will <span style={{ color: "red" }}>take care</span>
            </Section.HeaderMainTxt>
            <Section.HeaderMainSubTxt>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              officiis?
            </Section.HeaderMainSubTxt>
            <Section.HeaderMainSubTxt>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eius.{" "}
            </Section.HeaderMainSubTxt>
          </Section.Header>
          <AdvantagesCon>
            <AdvantagesCon.Item>
              {" "}
              <DeliveryDiningTwoToneIcon />
              <AdvantagesCon.Itemheader>
                Quick Delivery
              </AdvantagesCon.Itemheader>
              <AdvantagesCon.Itemtext>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </AdvantagesCon.Itemtext>
            </AdvantagesCon.Item>
            <AdvantagesCon.Item>
              {" "}
              <RoomServiceRoundedIcon />
              <AdvantagesCon.Itemheader>Super Dine In</AdvantagesCon.Itemheader>
              <AdvantagesCon.Itemtext>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </AdvantagesCon.Itemtext>
            </AdvantagesCon.Item>
            <AdvantagesCon.Item>
              {" "}
              <HailRoundedIcon />
              <AdvantagesCon.Itemheader>Easy Pick Up</AdvantagesCon.Itemheader>
              <AdvantagesCon.Itemtext>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,
                doloremque.
              </AdvantagesCon.Itemtext>
            </AdvantagesCon.Item>
          </AdvantagesCon>
        </Section>
        <PopularFoodsCon>
          <PopularFoods />
        </PopularFoodsCon>
        <WhyTastyTreatCon>
          <WhyTastyTreatCon.ImgDiV>
            <WhyTastyTreatCon.Img src={location} />
          </WhyTastyTreatCon.ImgDiV>
          <WhyTastyTreatCon.Texts>
            <WhyTastyTreatCon.Header>
              Why <span style={{ color: "red" }}>Tasty Treat?</span>
            </WhyTastyTreatCon.Header>
            <WhyTastyTreatCon.SubHeadertext>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              minus. Tempora reprehenderit a corporis velit, laboriosam vitae
              ullam, repellat illo sequi odio esse iste fugiat dolor, optio
              incidunt eligendi deleniti!
            </WhyTastyTreatCon.SubHeadertext>
            <WhyTastyTreatCon.Lists>
              <ul>
                <li>
                  <p className="PHEADER">
                    <i></i> Fresh and tasty foods
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, voluptatibus.
                  </p>
                </li>
                <li>
                  <p className="PHEADER">
                    <i></i> Quality support
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </li>
                <li>
                  <p className="PHEADER">
                    <i></i>Order from any location{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, earum.
                  </p>
                </li>
              </ul>
            </WhyTastyTreatCon.Lists>
          </WhyTastyTreatCon.Texts>
        </WhyTastyTreatCon>

        <HotPizzaCon>
          <h2 style={{ textAlign: "center", margin: "30px 0" }}>Hot Pizza</h2>
          <ProductContainer>
            {state?.data
              ?.filter((val) => val?.category.toLowerCase() === "pizza")
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
                            payload: { product: product },
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
        </HotPizzaCon>

        <TestimonialsCon>
          <WhyTastyTreatCon>
            <WhyTastyTreatCon.Texts>
              <h5 style={{ color: "red" }}>Testimonial</h5>
              <WhyTastyTreatCon.Header>
                What our <span style={{ color: "red" }}>customers</span> are
                saying
              </WhyTastyTreatCon.Header>
              <WhyTastyTreatCon.SubHeadertext>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Distinctio quasi qui minus quos sit perspiciatis inventore quis
                provident placeat fugiat!
              </WhyTastyTreatCon.SubHeadertext>
              <TextMobileStepper />
            </WhyTastyTreatCon.Texts>
            <WhyTastyTreatCon.ImgDiV>
              <WhyTastyTreatCon.Img src={network} />
            </WhyTastyTreatCon.ImgDiV>
          </WhyTastyTreatCon>
        </TestimonialsCon>
      </Wrapper>
    </Container>
  );
};
export default Home;
