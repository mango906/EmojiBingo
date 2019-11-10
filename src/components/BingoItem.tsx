import React from 'react';
import styled from 'styled-components';

interface Props {
   rowNumber: number,
   columnNumber: number
}

const BingoItem = ({ rowNumber, columnNumber }: Props) => {
   const Item = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background-color: #fff;
      font-size: 2rem;
   `

   return (
      <Item>😍</Item>
   );
};

export default BingoItem;