import React, { FC } from "react";

type TextComponentProps = {} & React.HTMLAttributes<HTMLParagraphElement>;

const TextComponent: FC<TextComponentProps> = ({ children, ...attrs }) =>
  <p {...attrs}>{children}</p>;

export default TextComponent;