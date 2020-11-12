import React, { FC } from "react";

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeaderLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = { level: TitleLevel } & React.HTMLAttributes<HTMLHeadingElement>;
const Title: FC<TitleProps> = ({ level, children, className = "", ...attr }) => {
  const Component = `h${level}` as HeaderLevel;
  const defaultFontSize = `fs${Math.max(5 - level, 2)}`;

  const classes = [...new Set([...className.split(" "), defaultFontSize])].join(" ");
  return <Component className={classes} {...attr}>{children}</Component>;
};

export default Title;
