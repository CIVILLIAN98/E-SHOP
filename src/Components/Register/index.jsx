import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, InputContainer, Wrapper, Input, Btn } from "./style";

export const Register = () => {
  const navigate = useNavigate();
  const Fullnameref = useRef();
  const Emailref = useRef();
  const Passwordref = useRef();

  const register = (e) => {
    e.preventDefault();
    let user = {
      fullname: Fullnameref.current.value,
      email: Emailref.current.value,
      password: Passwordref.current.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };
  return (
    <Container>
      <Wrapper>
        <form>
          <InputContainer>
            <Input ref={Fullnameref} placeholder="Full Name" type={"text"} />
            <Input ref={Emailref} placeholder="pochta" type="text" />
            <Input ref={Passwordref} placeholder="parol" type={"text"} />
            <Btn type="submit" onClick={register}>
              Register
            </Btn>
          </InputContainer>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Already have account? Login
          </span>
        </form>
      </Wrapper>
    </Container>
  );
};
export default Register;
