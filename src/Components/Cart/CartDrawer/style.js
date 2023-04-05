import styled from "styled-components";

const Product = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  border: 1px solid #fde4e4;
  margin: 5px 0;
  padding: 5px;
`;
Product.Img = styled.img`
  width: 100px;
  height: 100px;
  &:hover {
    transition: all 1s;
    transform: translate(0, -10px);
  }
`;

Product.Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background: red;
  gap: 10px;
`;

Product.Price = styled.h1`
  font-size: 16px;
  text-align: center;
  /* color: red; */
`;

Product.Btn = styled.button`
  font-size: 1rem;
  padding: 0 10px;
  border: none;
`;
const CartFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

CartFooter.TotalPrice = styled.h5`
  font-size: 1rem;
  color: white;
`;
CartFooter.Btn = styled.button`
  font-size: 1rem;
  color: black;
  width: 100px;
  background: #dfe1e5;
  padding: 10px;
  border: 1px solid white;
  border-radius: 13px;
`;

export { Product, CartFooter };
