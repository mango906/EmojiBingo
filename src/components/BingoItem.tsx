import React from "react";
import styled from "styled-components";

interface Props {
   rowNumber: number;
   columnNumber: number;
   contents: string;
}

const Item = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80px;
   height: 80px;
   background-color: #fff;
   font-size: 3.5rem;
`;

const BingoItem = ({ rowNumber, columnNumber, contents }: Props) => {
   return <Item>{contents}</Item>;
};

export default BingoItem;
