import { Link } from "react-router-dom";
import styled from "styled-components";
import { n_Arrivals } from "../data";
import { hoverBlue } from "../styled";

const Container = styled.div``;
const Wrapper = styled.div`
  margin: 40px 100px;
  padding: 50px 0;
`;
const Title = styled.h1`
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  padding-bottom: 50px;
`;
const List = styled.div`
  display: flex;
  gap: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Item = styled(Info)`
  flex: 1;
  cursor: pointer;
  gap: 20px;
`;
const Image = styled.img`
  height: 340px;
  width: 100%;
  object-fit: cover;
  &:hover {
    opacity: 0.7;
  }
`;
const Name = styled.span`
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 13px;
  text-align: center;
  word-spacing: 5px;
  line-height: 20px;
  ${hoverBlue}
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
`;
const NewArrivals = () => {
  return (
    <Container>
      <Wrapper>
        <Title>NEW ARRIVALS</Title>
        <List>
          {n_Arrivals.map((n, i) => {
            return (
              <Item key={i}>
                <Link
                  to="/product"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Image src={n.img} />
                </Link>
                <Info>
                  <Name>{n.name}</Name>

                  <Price>${n.price}.00</Price>
                </Info>
              </Item>
            );
          })}
        </List>
      </Wrapper>
    </Container>
  );
};

export default NewArrivals;
