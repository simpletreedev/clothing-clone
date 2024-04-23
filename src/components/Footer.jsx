import styled from "styled-components";
import { hoverBlue } from "../styled";

const Container = styled.div`
  border-top: 1px solid red;
  background-color: #eee;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  margin: 0 100px;
  display: flex;
  justify-content: space-between;
`;
const Block = styled.div`
  flex: 1;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 13px;
  word-spacing: 5px;
  letter-spacing: 2px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;
const Item = styled(Title)`
  font-size: 12px;
  cursor: pointer;
  font-weight: 300;
  ${hoverBlue}
`;

const InputEmail = styled.input`
  height: 30px;
  padding: 5px 10px;
  width: 100%;
  font-size: 14px;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px 15px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Block>
          <Title>HELP & INFOFMATION</Title>
          <List>
            <Item>Our Stores</Item>
            <Item>Sign in/Sign Up</Item>
            <Item>Help & Contact</Item>
            <Item>FAQ</Item>
            <Item>Wholesale</Item>
            <Item>Terms of Service</Item>
            <Item>Privacy Policy</Item>
            <Item>SELL TO US</Item>
          </List>
        </Block>
        <Block>
          <Title>SHIPPING & RETURNS</Title>
          <List>
            <Item>Shipping Information</Item>
            <Item>Create Return</Item>
            <Item>Order Tracking</Item>
            <Item>Contact Us</Item>
          </List>
        </Block>
        <Block>
          <Title>ABOUT</Title>
          <List>
            <Item>Our Stores</Item>
            <Item>Reviews</Item>
            <Item>Wholesale</Item>
            <Item>Rewards</Item>
            <Item>Sustainability</Item>
            <Item>SELL TO US</Item>
          </List>
        </Block>
        <Block>
          <Title>JOIN THE FAMILY</Title>
          <List>
            <Item>Subcribe for 10% OFF!</Item>
            <Item>
              <InputEmail placeholder="Enter your email address" />
            </Item>
            <Item>
              <Button>SUBSCRIBE</Button>
            </Item>
          </List>
        </Block>
      </Wrapper>
    </Container>
  );
};

export default Footer;
