import React from "react";
import styled from "styled-components";

interface Props {
   rowNumber: number;
   columnNumber: number;
   contents: string;
   handleClick(rowNumber: number, columnNumber: number): void;
   checked: boolean;
}

interface ItemProps {
   checked: boolean;
}

const Item = styled("div")<ItemProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80px;
   height: 80px;
   background-color: ${props => (props.checked ? "#000" : "#fff")}
   font-size: 3.5rem;
   cursor: pointer;
`;

const BingoItem: React.FC<Props> = ({
   rowNumber,
   columnNumber,
   contents,
   handleClick,
   checked
}) => {
   return (
      <Item
         checked={checked}
         onClick={() => handleClick(rowNumber, columnNumber)}
      >
         {contents}
      </Item>
   );
};

export default BingoItem;
