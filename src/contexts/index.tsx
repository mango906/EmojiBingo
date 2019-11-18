import React from "react";

import { BingoProvider } from "./BingoContext";

const Provider: React.FC<any> = ({ children }) => (
   <BingoProvider>{children}</BingoProvider>
);

export default Provider;
