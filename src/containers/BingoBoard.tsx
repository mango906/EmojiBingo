import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";
import emojis from "../config/config";

interface Props {
   count: number;
}

interface Square {
   contents: string;
   checked: boolean;
}

const Wrapper = styled("div")`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;

const Board = styled("div")<Props>`
   display: grid;
   grid-template-columns: repeat(${props => props.count}, 5rem);
   grid-template-rows: repeat(${props => props.count}, 5rem);
   grid-gap: 5px;
   align-self: center;
   margin-top: 20px;
`;

const BingoBoard = ({ count }: Props) => {
   let matrix: Array<any> = [];

   const shuffle = useCallback((array: Array<string>) => {
      console.log("array", array);
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
      console.log("arr", array);
      return array;
   }, []);

   for (let i = 0; i < count; i++) {
      matrix[i] = new Array(count).fill({ contents: "", checked: false });
   }

   const shuffledArray = shuffle(emojis);
   for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
         matrix[i][j] = {
            contents: shuffledArray[i * count + j],
            checked: false
         };
      }
   }

   return (
      <Wrapper>
         <Board count={count}>
            {matrix.map((row: Square[], rowNumber: number) =>
               row.map((el: Square, columnNumber: number) => {
                  return (
                     <BingoItem
                        key={rowNumber * count + columnNumber}
                        contents={el.contents}
                        rowNumber={rowNumber}
                        columnNumber={columnNumber}
                     />
                  );
               })
            )}
         </Board>
      </Wrapper>
   );
};

export default BingoBoard;
