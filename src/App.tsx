import React, { useState, useCallback } from "react";
import styled from "styled-components";
import BingoBoard from "./containers/BingoBoard";
import emojis from "./config/config";

const Wrapper = styled("div")`
   background-color: #282c34;
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Header = styled("h1")`
   color: #fff;
   text-align: center;
`;

const WhiteFont = styled("div")`
   color: #fff;
`;

const ShuffleBtn = styled("button")``;

const App: React.FC = () => {
   const [count, setCount] = useState<number>(5);
   const [shuffled, setShuffled] = useState<Array<string>>([]);

   const shuffle = useCallback((array: Array<string>) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
   }, []);

   const handleShuffle = () => {
      setShuffled(Array.from(shuffle(emojis)));
   };

   return (
      <Wrapper>
         <Header>😈이모지 빙고👿</Header>
         <div style={{ display: "flex", justifyContent: "center" }}>
            <WhiteFont>개수</WhiteFont>
            <select
               onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCount(parseInt(e.target.value))
               }
               value={count}
            >
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
            </select>
         </div>
         <ShuffleBtn onClick={handleShuffle}>SHUFFLE !</ShuffleBtn>
         <BingoBoard count={count} emojis={shuffled} />
      </Wrapper>
   );
};

export default App;
