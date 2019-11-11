import React from "react";
import styled from "styled-components";

interface Props {
   rowNumber: number;
   columnNumber: number;
}

const Item = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80px;
   height: 80px;
   background-color: #fff;
   font-size: 2rem;
`;

const BingoItem = ({ rowNumber, columnNumber }: Props) => {
   return <Item>😍</Item>;
};

export default BingoItem;
