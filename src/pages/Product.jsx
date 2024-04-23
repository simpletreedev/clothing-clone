import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AlsoLike from "./AlsoLike";
import Shipping from "./Shipping";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
`;

const Top = styled.div`
  display: flex;
`;
const Bottom = styled.div``;
const ImgContainer = styled.div`
  width: 65%;
  height: calc(100vh - 180px);
`;
const Image = styled.img`
  width: 550px;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Info = styled.div`
  width: 35%;
`;
const Name = styled.h2`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 3px;
  word-spacing: 6px;
  line-height: 30px;
  margin-bottom: 20px;
`;
const Price = styled.span`
  font-weight: 600;
  color: red;
`;
const Details = styled.div`
  border-top: 1px solid lightgray;
  margin: 20px 0;
  padding: 20px 0;
`;
const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const DetailsImage = styled.img``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SoldButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  color: black;
  letter-spacing: 2px;
  background-color: white;
  cursor: pointer;
  border: 1px solid lightgray;
  font-weight: 500;
`;

const GuideButton = styled(SoldButton)`
  background-color: black;
  color: white;
  margin: 20px 0;
`;

const WishList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: gray;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const MoreInfo = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  cursor: pointer;
`;
const Product = () => {
  return (
    <Container>
      <NavBar />
      <Categories />
      <Wrapper>
        <Top>
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/2241/4103/products/IMG_6025_02a9800c-0365-4017-a813-a8345dc282f8_700x.jpg?v=1659682319" />
          </ImgContainer>
          <Info>
            <Name>VINTAGE RALPH LAUREN CHAPS EMBROIDERED SWEATER MEDIUM</Name>
            <Price>$160.00 AUD</Price>
            <Details>
              <DetailsItem>
                <DetailsImage src="https://cdn.shopify.com/s/files/1/2241/4103/files/004-tshirt.svg" />
                Recommended size: Medium
              </DetailsItem>
              <DetailsItem>
                <DetailsImage src="https://cdn.shopify.com/s/files/1/2241/4103/files/001-drop.svg" />
                No marks or stains on this garment
              </DetailsItem>
              <DetailsItem>
                <DetailsImage src="https://cdn.shopify.com/s/files/1/2241/4103/files/003-dust.svg" />
                May show a few signs of wear or fading
              </DetailsItem>
              <DetailsItem>
                <DetailsImage src="https://cdn.shopify.com/s/files/1/2241/4103/files/002-number-one-in-a-circle.svg" />
                One stock only authentic vintage item
              </DetailsItem>
            </Details>
            <SoldButton>ADD TO CART</SoldButton>
            <GuideButton>BUY NOW</GuideButton>
            <WishList>
              <AiOutlineHeart style={{ fontSize: "18px" }} />
              ADD TO WISHLIST
            </WishList>
            <MoreInfo>
              MORE INFORMATION
              <RiArrowRightSLine />
            </MoreInfo>
          </Info>
        </Top>
        <Bottom>
          <Shipping />
        </Bottom>
      </Wrapper>
      <AlsoLike />
      <Footer />
    </Container>
  );
};

export default Product;
