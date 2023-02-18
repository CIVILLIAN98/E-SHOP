import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  margin: 0 auto;
  padding: 31px;
  width: 100%;
  max-width: 1440px;
  background: #fde4e4;
  text-align: center;
  @media screen and (max-width: 1024px) {
    padding: 31px 10px;
  }
  @media screen and (max-width: 820px) {
    padding: 31px 5px;
  }
  @media screen and (max-width: 400px) {
    padding: 31px 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 200px);
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 180px);
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 180px);
    justify-content: space-around;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 150px);
    justify-content: center;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

Item.Img = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;
Item.Header = styled.h5`
  font-size: 1.25rem;
  font-weight: 700 !important;
  width: 100%;
  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 0.7rem;
  }
`;
Item.Text = styled.p`
  color: black;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #333;
  line-height: 28px;
  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    /* line-height: 17px; */
  }
`;
Item.Input = styled.input`
  width: 100%;
  border: none;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;
const Footerbottom = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  text-align: left;
  @media screen and (max-width: 400px) {
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
Footerbottom.Boxes = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
Footerbottom.Text = styled.p`
  font-size: 0.8rem;
  color: #df2020;
  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
  }
`;
export { Container, Wrapper, Item, Footerbottom };
