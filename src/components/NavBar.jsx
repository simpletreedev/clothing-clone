import styled from "styled-components";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 4;
`;
const Wrapper = styled.div`
  height: 60px;
  margin: 0 100px;
  display: flex;
  align-items: center;
  position: relative;
`;
const Left = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1``;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  height: 34px;
  width: 30%;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  width: 80%;
`;
const Right = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const ItemIcons = styled.div``;
const ItemText = styled.span`
  margin-left: 5px;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Cart = styled.div`
  width: 400px;
  float: right;
  min-height: calc(100vh - 100px);
  background-color: #eee;
  /* z-index: 10; */
  position: absolute;
  right: 0;
  top: 100px;
  transition: all 1s ease;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
const CloseButton = styled.div`
  font-size: 26px;
  cursor: pointer;
`;
const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
`;
const Desc = styled.span`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 20px;
  word-spacing: 2px;
  font-weight: 300;
  font-size: 13px;
`;
const YourCart = styled.div`
  height: calc(100vh - 214px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(0);
  const [isClose, setIsClose] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "green" }}>
              𝙲𝚕𝚘𝚝𝚑𝚒𝚗𝚐
            </Link>
          </Logo>
          <SearchContainer>
            <IoIosSearch style={{ paddingLeft: "10px" }} />
            <SearchInput placeholder="Search..." />
          </SearchContainer>
        </Left>
        <Right>
          <Item>
            <ItemIcons>
              <AiOutlineUser />
            </ItemIcons>
            <ItemText>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                SIGN IN
              </Link>
            </ItemText>
          </Item>
          <Item>
            <ItemIcons>
              <AiOutlineHeart />
            </ItemIcons>
            <ItemText><Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                WISHLIST
              </Link></ItemText>
          </Item>
          <Item>
            <ItemIcons>
              <BsBagDash />
            </ItemIcons>
            <ItemText onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
              BAGS
            </ItemText>
          </Item>
        </Right>
      </Wrapper>
      {isOpen && (
        <Cart>
          <Header>
            <Top>
              <Title>CART</Title>
              <CloseButton onClick={() => setIsOpen(!isOpen)}>
                <IoIosClose />
              </CloseButton>
            </Top>

            <Desc>Spend $150.00 AUD more and get free shipping!</Desc>
          </Header>
          <YourCart>
            {isEmpty > 0 ? (
              <List>
                <Item>item1</Item>
                <Item>item2</Item>
                <Item>item3</Item>
              </List>
            ) : (
              "Your cart is empty"
            )}
          </YourCart>
        </Cart>
      )}
    </Container>
  );
};

export default NavBar;
