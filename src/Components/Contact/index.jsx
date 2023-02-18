import React from "react";
import { Container, Wrapper, Box } from "./style";
import ava from "../../assets/images/ava-1.jpg";
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Header>Contact</Wrapper.Header>
        <Box>
          <Box.Bio>
            <Box.Img src={ava} />
            <Box.Header>
              This WebSite Was Made By:{" "}
              <a
                style={{ color: "red" }}
                rel="noreferrer"
                href="https://www.instagram.com/civillian_98/"
                target="_blank"
              >
                @CIVILLIAN_98
              </a>
              Email Me:
              <a
                style={{ color: "red" }}
                rel="noreferrer"
                href="https://civillian1998@gmail.com"
                target="_blank"
              >
                {" "}
                Send Email
              </a>
            </Box.Header>
          </Box.Bio>
        </Box>
      </Wrapper>
    </Container>
  );
};
export default Contact;
