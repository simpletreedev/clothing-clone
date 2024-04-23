import styled from "styled-components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import "./styled";

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
