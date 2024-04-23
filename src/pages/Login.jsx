import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  color: black;
  font-size: 24px;
`;
const Desc = styled.span`
  text-align: center;
  font-size: 14px;
  word-spacing: 3px;
  letter-spacing: 1px;
  font-weight: 400;
`;
const Input = styled.input`
  border: none;
  outline: none;
  height: 40px;
  border: 1px solid lightgray;
  padding-left: 20px;
`;
const LoginButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px;
  width: 100%;
  height: 40px;
  cursor: pointer;
`;
const Text = styled(Desc)``;
const LoginFacebook = styled(LoginButton)`
  width: 20%;
  background-color: #4267b2;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 20px 0;
`;

const Policy = styled.span`
  font-size: 11px;
  width: 400px;
  text-align: center;
  font-weight: 500;
`;
const Login = () => {
  return (
    <Container>
      <NavBar />
      <Categories />
      <Wrapper>
        <Form>
          <Title>LOGIN</Title>
          <Desc>Please enter your e-mail and password :</Desc>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <LoginButton type="submit">LOGIN</LoginButton>
          <Text>
            Don't have an account ? 
            
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              Create one
            </Link>
          </Text>
        </Form>
        <LoginFacebook>
          <AiOutlineFacebook
            style={{ fontSize: "22px", marginRight: "10px" }}
          />
          Facebook Sign Up
        </LoginFacebook>
        <Policy>
          By clicking any of the social login buttons you agree to the terms of
          privacy policy described here
        </Policy>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
