import "./nav-item.css";
import React, { FC } from "react";

type NavItemProps = { active: boolean; onSelect: () => void; } & React.HTMLAttributes<HTMLButtonElement>;
const NavItem: FC<NavItemProps> = ({ children, active, onSelect, ...attrs }) => (
  <button className={`ph2 pv1 fs2 lh1 NavItem`} {...attrs} onClick={() => onSelect()} disabled={active}>
    {children}
  </button>
);

export default NavItem;