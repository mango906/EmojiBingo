import React, { useState } from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";

interface CountProps {
  count: number;
}

interface Square {
  contents: string;
  checked: boolean;
}

const BingoBoard = () => {
  const Wrapper = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;

  const Board = styled("div") <CountProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.count}, 5rem);
    grid-template-rows: repeat(${props => props.count}, 5rem);
    grid-gap: 5px;
    align-self: center;
    margin-top: 20px;
  `;

  const Header = styled("h1")`
    color: #fff;
    text-align: center;
  `;

  const WhiteFont = styled("div")`
    color: #fff;
  `;

  const [count, setCount] = useState<number>(5);

  let matrix = [];
  for (let i = 0; i < count; i++) {
    matrix[i] = new Array(count).fill({ contents: "", checked: false });
  }

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

      <Board count={count}>
        {matrix.map((row: Square[], rowNumber: number) =>
          row.map((el: Square, columnNumber: number) => {
            return (
              <BingoItem rowNumber={rowNumber} columnNumber={columnNumber} />
            );
          })
        )}
      </Board>
    </Wrapper>
  );
};

export default BingoBoard;
