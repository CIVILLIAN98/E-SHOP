import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  InputContainer,
  Wrapper,
  Input,
  Btn,
  CreateAccount,
} from "./style";

export const Login = () => {
  const navigate = useNavigate();
  const Emailref = useRef();
  const Passwordref = useRef();

  const login = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      user?.email === Emailref.current.value &&
      user?.password === Passwordref.current.value
    ) {
      const number = parseInt(Math.random() * 1000000000000000000000);
      localStorage.setItem("tokenFood", JSON.stringify(number.toString(16)));
    }
  };
  return (
    <Container>
      <Wrapper>
        <h1>Login</h1>
        <InputContainer>
          <Input ref={Emailref} placeholder="email" type={"text"} />
          <Input ref={Passwordref} placeholder="password" type={"text"} />
          <Btn type="submit" onClick={() => login && navigate("/home")}>
            Login
          </Btn>
        </InputContainer>
        <CreateAccount>
          <CreateAccount.Text>Don't Have An Account? </CreateAccount.Text>
          <Btn onClick={() => navigate("/register")}>Create Account</Btn>
        </CreateAccount>
      </Wrapper>
    </Container>
  );
};
export default Login;
