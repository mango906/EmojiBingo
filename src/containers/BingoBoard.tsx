import React from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";

interface BoardProps {
   count: number;
}

interface Emoji {
   data: Array<string>;
   key: number;
}

interface Props {
   count: number;
   emojis: Emoji;
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

const BingoBoard = ({ count, emojis }: Props) => {
   let matrix: Array<any> = [];

   for (let i = 0; i < count; i++) {
      matrix[i] = new Array(count).fill({ contents: "", checked: false });
   }

   for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
         matrix[i][j] = {
            contents: emojis.data[i * count + j],
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
