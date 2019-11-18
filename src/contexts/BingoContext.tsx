import React, { useReducer, createContext } from "react";

interface Bingo {
   row: number;
   column: number;
}

const initialState: Bingo[] = [];

const BingoReducer = (state: Bingo[] = initialState, action: any) => {
   switch (action.type) {
      case "SELECT":
         return state;
      default:
         throw new Error();
   }
};

const BingoContext = createContext({} as Bingo[]);

const BingoProvider: React.FC<any> = ({ children }) => {
   const [state, dispatch] = useReducer(BingoReducer, initialState);
   return (
      <BingoContext.Provider value={state}>{children}</BingoContext.Provider>
   );
};

export default BingoProvider;
