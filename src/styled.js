import { createGlobalStyle, css } from "styled-components";
// import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,800,900&display=swap");

export const GlobalStyle = createGlobalStyle`
  :root{
    
  }
`;

export const hoverBlue = (props) => {
  return css`
    &:hover {
      color: #1296ba;
      transition: all 0.2s ease;
      ${props};
    }
  `;
};
