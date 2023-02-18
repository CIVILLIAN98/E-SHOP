import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  max-width: 1440px;
  height: 120px;
  width: 100%;
  padding: 10px 121px;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  @media screen and (max-width: 1280px) {
    padding: 0 116px;
  }
  @media screen and (max-width: 1178px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin: 10px auto;
  }
  @media screen and (max-width: 884px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    height: auto;
  }

  @media screen and (max-width: 428px) {
    padding: 0 20px;
  }
`;
Nav.Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;
Nav.Column.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
Nav.Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
Nav.Column.Title = styled.h5`
  height: 10px;
`;
const Logo = styled.img`
  cursor: pointer;
  @media screen and (max-width: 428px) {
    width: 40px;
    height: 40px;
  }
`;
Nav.Column.Headers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;
const Icons = styled.div``;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 131px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    padding: 0 116px;
  }
  @media screen and (max-width: 1178px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 1px;
  }
  @media screen and (max-width: 884px) {
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    justify-items: center;
  }
  @media screen and (max-width: 428px) {
    padding: 0 10px;
  }
`;

export { Container, Nav, Wrapper, Logo, Icons };
