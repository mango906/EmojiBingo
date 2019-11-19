import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";

import { useBingo, INIT } from "../contexts/BingoContext";

interface BoardProps {
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

const Board = styled("div")<BoardProps>`
   display: grid;
   grid-template-columns: repeat(${props => props.count}, 5rem);
   grid-template-rows: repeat(${props => props.count}, 5rem);
   grid-gap: 5px;
   align-self: center;
   margin-top: 20px;
`;

const BingoBoard: React.FC = () => {
   const [state, dispatch] = useBingo();

   const { count, matrix } = state;

   useEffect(() => {
      dispatch({ type: INIT });
   }, [count]);

   const handleClick = useCallback((row: number, column: number) => {}, []);

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
