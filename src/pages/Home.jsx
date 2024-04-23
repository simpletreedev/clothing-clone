import styled from "styled-components";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewArrivals from "../components/NewArrivals";
import Slider from "../components/Slider";
import ViewProduct from "../components/ViewProduct";

const Container = styled.div`
  background-color: #eee;
`;
const Home = () => {
  return (
    <Container>
      <NavBar />
      <Categories />
      <Slider />
      <NewArrivals />
      <ViewProduct />
      <Footer />
    </Container>
  );
};

export default Home;
