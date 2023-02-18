import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 80px auto;
`;
const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;
Wrapper.Header = styled.h1`
  text-align: center;
`;
const Box = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
`;
Box.Bio = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
Box.Img = styled.img`
  width: 300px;
  height: 300px;
`;
Box.Header = styled.h4`
  width: 50%;
  font-size: 1.7rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export { Container, Wrapper, Box };
