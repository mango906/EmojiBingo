import React, { useReducer, createContext, useContext } from "react";

export const INIT = "bingo/init";
export const SHUFFLE = "bingo/shuffle";
export const SET_COUNT = "bingo/count";
export const CLICK = "bingo/click";

interface Bingo {
   row: number;
   column: number;
}

interface Square {
   contents: string;
   checked: boolean;
}

interface Location {
   row: number;
   column: number;
}

interface State {
   count: number;
   matrix: Square[][];
   emojis: Array<string>;
}

const initialState: State = {
   count: 5,
   matrix: [],
   emojis: []
};

const initialize = (count: number) => {
   let matrix = [];
   for (let i = 0; i < count; i++) {
      matrix[i] = new Array(count).fill({ contents: "", checked: false });
   }
   return matrix;
};

const shuffle = (emojis: Array<string>, matrix: Square[][], count: number) => {
   for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
         matrix[i][j] = {
            contents: emojis[i * count + j],
            checked: false
         };
      }
   }
};

const handleClick = (location: Location, matrix: Square[][]) => {
   const { row, column } = location;
   matrix[row][column].checked = true;
};

const BingoReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case INIT:
         return { ...state, matrix: initialize(state.count) };
      case SHUFFLE:
         shuffle(action.payload, state.matrix, state.count);
         return { ...state };
      case SET_COUNT:
         return { ...state, count: action.payload };
      case CLICK:
         handleClick(action.payload, state.matrix);
         return { ...state };
      default:
         throw new Error();
   }
};

const BingoContext = createContext([] as any);

const BingoProvider: React.FC<React.ReactNode> = ({ children }) => {
   const contextValue = useReducer(BingoReducer, initialState);
   return (
      <BingoContext.Provider value={contextValue}>
         {children}
      </BingoContext.Provider>
   );
};

const useBingo = () => {
   const contextValue = useContext(BingoContext);
   return contextValue;
};

export { BingoProvider, useBingo };
