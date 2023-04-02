import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 400px) {
    padding: 0;
    margin: 100px auto;
  }
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 131px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    padding: 0 116px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 820px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 3.3fr);
  gap: 25px;
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
  padding: 10px 0;
`;
Product.Img = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    transition: all 1s;
    transform: translate(0, -10px);
  }
`;
Product.Btn = styled.button`
  font-size: 0.6rem;
  color: white;
  width: 100px;
  background: red;
  padding: 10px;
  border: none;
  border-radius: 13px;
`;
Product.Price = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: red;
`;
export { Container, Wrapper, ProductContainer, Product };
