import React from "react";

const Emoji: React.FC<any> = ({ contents }) => (
   <span role="img">{contents}</span>
);

export default Emoji;
