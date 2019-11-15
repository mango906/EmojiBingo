import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";

interface BoardProps {
   count: number;
}

interface Props {
   count: number;
   emojis: Array<string>;
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

const Board = styled("div")<BoardProps>`
   display: grid;
   grid-template-columns: repeat(${props => props.count}, 5rem);
   grid-template-rows: repeat(${props => props.count}, 5rem);
   grid-gap: 5px;
   align-self: center;
   margin-top: 20px;
`;

const BingoBoard: React.FC<Props> = ({ count, emojis }) => {
   let matrix: Array<Array<Square>> = [];

   for (let i = 0; i < count; i++) {
      matrix[i] = new Array(count).fill({ contents: "", checked: false });
   }

   for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
         matrix[i][j] = {
            contents: emojis[i * count + j],
            checked: false
         };
      }
   }

   const handleClick = useCallback((row: number, column: number) => {
      matrix[row][column] = {
         ...matrix[row][column],
         checked: true
      };
   }, []);

   return (
      <Wrapper>
         <Board count={count}>
            {matrix.map((row: Square[], rowNumber: number) =>
               row.map((el: Square, columnNumber: number) => {
                  return (
                     <BingoItem
                        key={rowNumber * count + columnNumber}
                        contents={el.contents}
                        checked={el.checked}
                        rowNumber={rowNumber}
                        columnNumber={columnNumber}
                        handleClick={handleClick}
                     />
                  );
               })
            )}
         </Board>
      </Wrapper>
   );
};

export default BingoBoard;
