import React, { useReducer, createContext, useContext } from "react";

export const SHUFFLE = "bingo/shuffle";
export const SET_COUNT = "bingo/count";

interface Bingo {
   row: number;
   column: number;
}

interface Square {
   contents: string;
   checked: boolean;
}

const initialState: any = {
   count: 5,
   emojis: []
};

const BingoReducer = (state: any = initialState, action: any) => {
   switch (action.type) {
      case SHUFFLE:
         return state;
      case SET_COUNT:
         return { ...state, count: action.payload };
      default:
         throw new Error();
   }
};

const BingoContext = createContext([] as any);

const BingoProvider: React.FC<any> = ({ children }) => {
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
