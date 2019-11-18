import React from "react";

import App from "./App";
import Provider from "./contexts";

const Root = () => (
   <Provider>
      <App />
   </Provider>
);

export default Root;
