import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const SHippingCon = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;
SHippingCon.Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 75%;
`;
SHippingCon.Inputs = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
`;
const Box1Header = styled.h3``;
const Box1Input = styled.input`
  border: none;
  width: 100%;
`;
const Box1Btn = styled.button`
  margin: 20px 0;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 0.8rem;
  color: white;
  background-color: red;
  border: none;
`;
SHippingCon.Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  align-self: baseline;
  width: 30%;
  background: #fde4e4;
  padding: 30px;
  height: 230px;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Box2text = styled.h6`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 0.9rem;
`;
const Box2Total = styled.h5`
  border-top: 1px solid #ddd;
  padding-top: 30px;
  width: 100%;
  font-size: 1rem;
`;
export {
  Container,
  Wrapper,
  SHippingCon,
  Box1Header,
  Box1Input,
  Box1Btn,
  Box2text,
  Box2Total,
};
