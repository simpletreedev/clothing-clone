import styled from "styled-components";
import { shipping, viewAll } from "../data";

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
  justify-content: space-between;
  gap: 20px;
`;
const Item = styled.div`
  flex: 1;
  height: 550px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    opacity: 0.7;
  }
`;
const ShipContainer = styled(List)`
  margin-top: 100px;
`;
const ShipItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  cursor: pointer;
`;
const ShipImage = styled.img`
  width: 80px;
  height: 80px;
`;
const ShipText = styled.span`
  font-weight: 300;
  font-size: 12px;
  word-spacing: 5px;
  letter-spacing: 2px;
  text-align: center;
`;

const ViewProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Title>VIEW ALL PRODUCTS</Title>
        <List>
          {viewAll.map((v, i) => {
            return (
              <Item key={i}>
                <Image src={v.img} />
              </Item>
            );
          })}
        </List>
        <ShipContainer>
          {shipping.map((s, i) => {
            return (
              <ShipItem key={i}>
                <ShipImage src={s.img} />
                <ShipText>{s.text}</ShipText>
              </ShipItem>
            );
          })}
        </ShipContainer>
      </Wrapper>
    </Container>
  );
};

export default ViewProduct;
