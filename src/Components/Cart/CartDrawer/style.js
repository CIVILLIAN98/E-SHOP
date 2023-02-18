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
`;

Product.Price = styled.p`
  font-size: 0.7rem;
  text-align: center;
  /* color: red; */
`;

Product.Btn = styled.button`
  font-size: 0.6rem;
`;
const CartFooter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

CartFooter.TotalPrice = styled.h5`
  font-size: 1rem;
  color: white;
`;
CartFooter.Btn = styled.button`
  font-size: 0.8rem;
  padding: 5px;
  border-radius: 5px;
`;

export { Product, CartFooter };
