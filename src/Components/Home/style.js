import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const ArticleCon = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1 1;
  padding: 60px 0;
  @media screen and (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 0;
  }
`;
const Main = styled.main`
  width: 50%;
  height: auto;
  padding: 70px 0;
  @media screen and (max-width: 428px) {
    width: 100%;
    padding: 20px 0;
  }
  @media screen and (max-width: 820px) {
    padding: 30px 0;
  }
`;
Main.Toptext = styled.h5`
  @media screen and (max-width: 820px) {
    font-size: 0.7rem;
  }
`;
Main.Header = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.4rem;
  }
`;
Main.SubHeadertxt = styled.p`
  font-size: 1em;
  line-height: 30px;
  color: #777;
  @media screen and (max-width: 1024px) {
    font-size: 0.7rem;
    width: 80%;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.6rem;
    width: 80%;
  }
  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;

Main.Btns = styled.div`
  width: 80%;
  margin-top: 1.5rem !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 428px) {
    width: 100%;
    justify-content: space-around;
  }
`;

const Mainbtn1 = styled.button`
  border: none;
  outline: none;
  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    font-size: 0.8rem;
  }
  font-weight: 600;
  background: #df2020;
  color: #fff;
  transition: 0.3s;
`;
const Mainbtn2 = styled.button`
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 820px) {
    font-size: 0.8rem;
  }
  font-weight: 600;
  background: transparent;
  border: 1px solid #df2020 !important;
`;
Main.BottomIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem !important;
  gap: 3rem;
  @media screen and (max-width: 1280px) {
    width: 80%;
    font-size: 0.8em;
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.8em;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.7em;
  }
  @media screen and (max-width: 428px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;
Main.BottomIconstxt = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  gap: 10px;
  @media screen and (max-width: 1280px) {
    width: 100%;
    font-size: 0.8em;
  }
  @media screen and (max-width: 428px) {
    gap: 0px;
    flex-direction: column;
  }
`;

const MainImg = styled.main`
  width: 50%;
  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;
Main.IMG = styled.img`
  width: 100% !important;
`;

const Categories = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem !important;
  @media screen and (max-width: 1280px) {
    grid-gap: 3rem;
  }
  @media screen and (max-width: 820px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(2, 150px) !important;
  }
`;
Categories.Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #fde4e4;
  padding: 30px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: translate(0, -20px);
  }
  @media screen and (max-width: 820px) {
    transform: scale(0.5rem);
  }
`;
Categories.Img = styled.img`
  width: 64px;
  height: 64px;
  @media screen and (max-width: 428px) {
    width: 40px;
    height: 40px;
  }
`;
Categories.Text = styled.h6`
  font-size: 1rem;
  @media screen and (max-width: 428px) {
    font-size: 0.8rem !important;
  }
`;
const Section = styled.section`
  width: 100%;

  text-align: center !important;
`;
Section.Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
Section.Headertoptxt = styled.h5`
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0.15),
    hsla(0, 0%, 100%, 0)
  );
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  text-align: center !important;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 0;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.25rem;
  font-family: "RocknRoll One", sans-serif !important;
  margin-bottom: 1.5rem !important;
  color: #df2020;
`;
Section.HeaderMainTxt = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #212245;
  margin-bottom: 1rem;
`;
Section.HeaderMainSubTxt = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;
const AdvantagesCon = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 428px) {
    margin: 100px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
AdvantagesCon.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
AdvantagesCon.Itemheader = styled.h5`
  font-size: 1.25rem;
  font-weight: 700 !important;
  margin-bottom: 1rem !important;
  width: 150px;
`;
AdvantagesCon.Itemtext = styled.p`
  color: #777;
  margin-top: 0;
  margin-bottom: 1rem;
  width: auto;
  height: auto;
`;
const PopularFoodsCon = styled.div`
  width: 100%;
  height: auto;
`;

const WhyTastyTreatCon = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  align-items: center;
  justify-content: center;
  flex-grow: 1 1;
`;
WhyTastyTreatCon.ImgDiV = styled.div`
  display: flex;
  width: 100%;
`;
WhyTastyTreatCon.Img = styled.img`
  width: 100%;
  margin-bottom: auto;
`;
WhyTastyTreatCon.Texts = styled.div`
  width: 100%;
  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;
WhyTastyTreatCon.Header = styled.h1`
  margin-bottom: 1.5rem !important;
  font-size: 2.1rem;
  font-weight: 600;
  color: #212245;
  @media screen and (max-width: 820px) {
    font-size: 1.5rem;
  }
`;
WhyTastyTreatCon.SubHeadertext = styled.p`
  color: #777;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 1rem;
  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
  @media screen and (max-width: 428px) {
    line-height: 17px;
  }
`;
WhyTastyTreatCon.Lists = styled.div`
  @media screen and (max-width: 428px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const HotPizzaCon = styled.div`
  width: 100%;
`;
const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  @media screen and (max-width: 1280px) {
    width: 100%;
    grid-template-columns: repeat(4, 250px);
    gap: 10px;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    grid-template-columns: repeat(4, 180px);
    gap: 10px;
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Product = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fde4e4;
`;
Product.Img = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 820px) {
    width: 70px;
    height: 70px;
  }
  &:hover {
    transition: all 1s;
    transform: translate(0, -10px);
  }
`;

Product.Header = styled.h5`
  text-align: center;
  @media screen and (max-width: 820px) {
    font-size: 0.8rem;
  }
`;

Product.Btn = styled.button`
  font-size: 0.6rem;
  width: 100%;
`;
Product.Price = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: red;
`;

const TestimonialsCon = styled.div`
  width: 100%;
  margin: 100px 0;
`;

export {
  Container,
  Wrapper,
  ArticleCon,
  Main,
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
};
