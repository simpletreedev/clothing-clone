import styled from "styled-components";
import { hoverBlue } from "../styled";

const Container = styled.div`
  position: sticky;
  top: 60px;
  z-index: 4;
`;
const Wrapper = styled.div`
  margin: 0 100px;
  background-color: black;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
const Item = styled.div`
  color: white;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  ${hoverBlue}
`;
const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <Item>NEW IN</Item>
          <Item>SWEATER</Item>
          <Item>T-SHIRTS</Item>
          <Item>SNEAKER</Item>
          <Item>HOODIES</Item>
          <Item>JACKETS</Item>
          <Item>1/4 ZIPS</Item>
          <Item>BOTTOMS</Item>
          <Item>BRAND</Item>
          <Item>SALE</Item>
        </List>
      </Wrapper>
    </Container>
  );
};

export default Categories;
