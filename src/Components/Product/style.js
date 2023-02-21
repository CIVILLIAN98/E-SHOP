import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 80px auto;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const ProductCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
ProductCon.Img = styled.img`
  width: 500px;
  height: 500px;
  flex-grow: 1;
  &:hover {
    transition: all 1s;
    transform: translate(0, -10px);
  }
  @media screen and (max-width: 430px) {
    width: 400px;
    height: 400px;
  }
`;
ProductCon.Texts = styled.div`
  width: 100%;
  flex-grow: 1;
`;

ProductCon.Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 50px 0;
  @media screen and (max-width: 430px) {
    justify-content: space-around;
  }
`;

ProductCon.Btn = styled.button`
  font-size: 1rem;
  border: none;
  padding: 15px;
  border-radius: 5px;
  background-color: red;
`;
ProductCon.Price = styled.p`
  font-size: 2rem;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 430px) {
    font-size: 1rem;
  }
`;
ProductCon.Desc = styled.p`
  width: 100%;
  @media screen and (max-width: 430px) {
    font-size: 0.8rem;
    text-align: justify;
    margin: 20px auto;
  }
`;
ProductCon.P = styled.p``;
export { Container, Wrapper, ProductCon };
