import React from "react";
import styled from "styled-components";
import BingoBoard from "./containers/BingoBoard";

const Wrapper = styled("div")`
   background-color: #282c34;
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-content: center;
`;

const App: React.FC = () => {
   return (
      <Wrapper>
         <BingoBoard />
      </Wrapper>
   );
};

export default App;
