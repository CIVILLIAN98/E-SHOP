import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    padding: 0 116px;
  }
  @media screen and (max-width: 1178px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 884px) {
    justify-items: center;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 0 10px !important;
  }
  text-align: center;
`;

const InputContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 50px auto;
  background: #fde4e4;
  padding: 10px;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 100%;
  background: transparent;
  padding: 7px 20px;
  border: none;
  margin: 20px 0;
  border-bottom: 1px solid rgba(33, 34, 69, 0.2980392156862745);
`;

const Btn = styled.button`
  margin-top: 10px;
  border: none;
  padding: 7px 25px;
  background: #df2020;
  color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
`;

export { Container, Wrapper, InputContainer, Input, Btn };
