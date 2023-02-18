import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, InputContainer, Wrapper, Input, Btn } from "./style";

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
        <form>
          <InputContainer>
            <Input ref={Emailref} placeholder="Pochta" type={"text"} />
            <Input ref={Passwordref} placeholder="Parol" type={"text"} />
            <Btn type="submit" onClick={login}>
              Login
            </Btn>
          </InputContainer>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Don't Have An Account? Create Account
          </span>
        </form>
      </Wrapper>
    </Container>
  );
};
export default Login;
