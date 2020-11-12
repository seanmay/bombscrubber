import React, { FC } from "react";

const rerollStyle = {
  cursor: "pointer",
  fontSize: "var(--size-lg)"
};

const RerollButton: FC<{ onReset: () => void }> = ({ onReset }) => 
  <button onClick={onReset} style={rerollStyle}>
    🔄
  </button>;

export default RerollButton;
