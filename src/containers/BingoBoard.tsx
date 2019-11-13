import React, { useState, useCallback } from "react";
import styled from "styled-components";
import BingoItem from "../components/BingoItem";
import emojis from "../config/config";

interface CountProps {
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

const BingoBoard = () => {
  const [count, setCount] = useState<number>(5);

  const shuffle = useCallback((array: Array<string>) => {
    for (let i = array.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      console.log(array);
    }
  }, []);

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
