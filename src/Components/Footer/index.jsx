import React from "react";
import { Container, Wrapper, Item, Footerbottom } from "./style";
import logo from "../../assets/images/Logo.png";
import SendIcon from "@mui/icons-material/Send";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GithubOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Item>
          <Item.Img src={logo} alt="" />
          <Item.Header>Tasty Treat</Item.Header>
          <Item.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur accusamus
          </Item.Text>
        </Item>
        <Item>
          <Item.Header>Delivery Time</Item.Header>
          <ul>
            <li>
              <span>Sunday - Thursday</span>
              <Item.Text>10:00am - 11:00pm</Item.Text>
            </li>
            <li>
              <span>Friday - Saturday</span>
              <Item.Text>Off day</Item.Text>
            </li>
          </ul>
        </Item>
        <Item>
          <Item.Header onClick={() => navigate("/contact")}>
            Contact
          </Item.Header>
          <ul>
            <li>
              <Item.Text>Location: Busan, South Korea</Item.Text>
            </li>
            <li>
              <span>Phone: 01712345678</span>
            </li>
            <li>
              <span>Email: example@gmail.com</span>
            </li>
          </ul>
        </Item>
        <Item>
          <Item.Header>Newsletter</Item.Header>
          <Item.Text>Subscribe our newsletter</Item.Text>
          <div
            style={{
              display: "flex",
              border: "1px solid black",
              background: "white",
              width: "100%",
            }}
          >
            <Item.Input type="email" placeholder="Enter your email" />
            <SendIcon />
          </div>
        </Item>
      </Wrapper>
      <Footerbottom>
        <Footerbottom.Boxes
          style={{ width: "50%", display: "flex", alignItems: "flex-start" }}
        >
          <Footerbottom.Text>
            Copyright - 2022, website made by CIVILLIAN_98. All Rights Reserved.
          </Footerbottom.Text>
        </Footerbottom.Boxes>

        <Footerbottom.Boxes>
          <p>Follow: </p>
          <FacebookRoundedIcon />
          <GithubOutlined />
          <YouTubeIcon />
          <LinkedInIcon />
        </Footerbottom.Boxes>
      </Footerbottom>
    </Container>
  );
};
export default Footer;
