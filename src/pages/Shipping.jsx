import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 60%;
`;
const Name = styled.div`
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  color: #aef567;
  letter-spacing: 2px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 500;
  text-align: center;
  padding-top: 50px;
`;
const Desc = styled.p`
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 2px;
  font-style: italic;
  text-align: center;
  margin: 15px 0 30px 0;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`;
const ListItem = styled.div`
  border: 1px solid lightgray;
  padding: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 15px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Table = styled.div`
  display: flex;
  padding: 20px 0;
`;
const TableItem = styled.div`
  flex: 1;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const TableImage = styled.img`
  height: 80px;
  width: 80px;
`;
const TableButton = styled.button`
  background-color: black;
  color: white;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  padding: 10px;
  width: 25%;
`;
const Item = styled.div`
  padding: 18px 5px;
  border: 1px solid lightgray;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1px;
`;
const Region = styled.div`
  flex: 2;
`;
const Speed = styled.div`
  flex: 1;
`;
const Rate = styled.div`
  flex: 2;
`;
const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid lightgray;
  padding: 20px;
`;
const Para = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  word-spacing: 3px;
  color: gray;
  letter-spacing: 2px;
`;
const ParaBottom = styled.p`
  color: black;
  font-size: 14px;
  letter-spacing: 2px;
  text-align: center;
`;
const Shipping = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFaq, setIsFaq] = useState(false);
  const [isReturns, setIsReturns] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Name onClick={() => setIsOpen(!isOpen)}>
          SHIPPING
          {isOpen ? <AiOutlineMinus /> : <IoIosAdd />}
        </Name>
        {isOpen && (
          <Details>
            <Title>FOR NEXT DAY DELIVERY ORDERS MUST BE PLACED BY 2PM</Title>
            <Desc>NEXT DAY DELIVERY IS CURRENTLY UNAVAILABLE.</Desc>
            <Table>
              <Region>
                <Item
                  style={{ backgroundColor: "#e6ebe7", fontWeight: "bold" }}
                >
                  Region
                </Item>
                <Item>Australia (Express)</Item>
                <Item>Australia (Priority)</Item>
                <Item>New Zealand (Express DHL)</Item>
                <Item>New Zealand (Priority)</Item>
                <Item>United States & Canada (Express DHL)</Item>
                <Item>Rest of World</Item>
              </Region>
              <Speed>
                <Item
                  style={{ backgroundColor: "#e6ebe7", fontWeight: "bold" }}
                >
                  Speed
                </Item>
                <Item>1-2 Business Days</Item>
                <Item>3 - 5 business days</Item>
                <Item>Next Day Delivery</Item>
                <Item>4 - 9 business days</Item>
                <Item>2 - 4 business days</Item>
                <Item>3 - 5 business days</Item>
              </Speed>
              <Rate>
                <Item
                  style={{ backgroundColor: "#e6ebe7", fontWeight: "bold" }}
                >
                  Rate
                </Item>
                <Item>$12 or free on orders over $150</Item>
                <Item>$9.99 or free on orders over $150</Item>
                <Item>$19.99 or free over over $200</Item>
                <Item>$12.99</Item>
                <Item>$19.99 or free over $200</Item>
                <Item>$14.99 or free on orders over $200</Item>
              </Rate>
            </Table>
          </Details>
        )}
        {isOpen && (
          <Details>
            <Title>FAQS</Title>
            <List>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                CAN I CANCEL AN ORDER?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              {isFaq && (
                <MoreInfo>
                  <Para>
                    If you've made an order and need the address changed please
                    get in touch with us ASAP using a contact option below.
                  </Para>
                  <Para>
                    Generally we can change an address for an order, however
                    some couriers have deadlines so its critical you reach out
                    as soon as you can.
                  </Para>
                  <Para>
                    If we can't change the address in time we will get the
                    package returned to us and resend it to your correct
                    address.
                  </Para>
                  <ParaBottom>
                    STILL NEED HELP? YOU CAN GET IN TOUCH VIA LIVE CHAT, EMAIL
                    SALES@RESTATEDVINTAGE.COM OR TEXT AT +61 488 824 805
                  </ParaBottom>
                </MoreInfo>
              )}
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                CAN I CHANGE THE ADDRESS ON MY ORDER?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                HOW I CAN I TRACK MY ORDER
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                CUSTOMS AND DUTY CHARGES
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                WHAT DAYS DO WE SHIP ORDERS?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
            </List>
          </Details>
        )}
        <Name onClick={() => setIsReturns(!isReturns)}>
          RETURNS
          {isReturns ? <AiOutlineMinus /> : <IoIosAdd />}
        </Name>
        {isReturns && (
          <Details>
            <Title>HOW TO CREATE A RETURN</Title>
            <Table>
              <TableItem>
                <TableImage src="https://i.shgcdn.com/5e65f2fe-ee0e-4b4e-8c9e-0ac8ef899628/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <Para>1. Select the items you'd like to return.</Para>
              </TableItem>
              <TableItem>
                <TableImage src="https://i.shgcdn.com/d9a6aec1-1108-4a5d-af12-6c091c571176/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <Para>2. Take your return items to the local post office.</Para>
              </TableItem>
              <TableItem>
                <TableImage src="https://i.shgcdn.com/1c11229e-057a-4931-903c-e31b938fec18/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <Para>3. Send it back to us.</Para>
              </TableItem>
            </Table>
            <TableButton>CREATE MY RETURN</TableButton>
          </Details>
        )}
        {isReturns && (
          <Details>
            <Title>RETURNS FAQS</Title>
            <List>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                WHATS YOUR RETURN POLICY?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              {isFaq && (
                <MoreInfo>
                  <Para>
                    If you've made an order and need the address changed please
                    get in touch with us ASAP using a contact option below.
                  </Para>
                  <Para>
                    Generally we can change an address for an order, however
                    some couriers have deadlines so its critical you reach out
                    as soon as you can.
                  </Para>
                  <Para>
                    If we can't change the address in time we will get the
                    package returned to us and resend it to your correct
                    address.
                  </Para>
                  <ParaBottom>
                    STILL NEED HELP? YOU CAN GET IN TOUCH VIA LIVE CHAT, EMAIL
                    SALES@RESTATEDVINTAGE.COM OR TEXT AT +61 488 824 805
                  </ParaBottom>
                </MoreInfo>
              )}
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                I'VE RECEIVED A FAULTY OR WRONG ITEM, WHAT SHOULD I DO?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
              <ListItem onClick={() => setIsFaq(!isFaq)}>
                WHEN WILL I RECEIVE MY STORE CREDIT?
                {isFaq ? <AiOutlineMinus /> : <IoIosAdd />}
              </ListItem>
            </List>
          </Details>
        )}
      </Wrapper>
    </Container>
  );
};

export default Shipping;
