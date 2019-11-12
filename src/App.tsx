import React from "react";
import styled from "styled-components";
import BingoBoard from "./containers/BingoBoard";

const App: React.FC = () => {
   const Wrapper = styled("div")`
      background-color: #282c34;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-itmes: center;
      justify-content: center;
   `;

   return (
      <Wrapper>
         <BingoBoard />
      </Wrapper>
   );
};

export default App;
