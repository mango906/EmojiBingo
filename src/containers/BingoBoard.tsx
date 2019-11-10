import React, { useState } from 'react';
import styled from 'styled-components';
import BingoItem from '../components/BingoItem';

interface CountProps {
   count: number;
}

interface Square {
   contents: string,
   checked: boolean
}

const BingoBoard = () => {
   const Wrapper = styled("div")`
      display: flex;
      flex-basis: content;
      position: relative;
      align-items: center;
   `

   const Board = styled("div") <CountProps>`
      display: grid;
      grid-template-columns: repeat(${props => props.count}, 5rem);
      grid-template-rows: repeat(${props => props.count}, 5rem);
      grid-gap: 5px;
   `

   const [count, setCount] = useState<number>(5);

   let matrix = [];

   for (let i = 0; i < count; i++) {
      matrix[i] = new Array(count).fill({ contents: "", checked: false });
   }

   return (
      <Wrapper>
         <Board count={count}>
            {matrix.map((row: Square[], rowNumber: number) =>
               row.map((el: Square, columnNumber: number) => {
                  return <BingoItem rowNumber={rowNumber} columnNumber={columnNumber} />
               })
            )}
         </Board>
      </Wrapper>
   );
};

export default BingoBoard;