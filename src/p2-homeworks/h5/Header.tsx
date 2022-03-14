import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css";

function Header() {
  const getNavLinkStyle = (NavData: {isActive: boolean}) => {
    return NavData.isActive ? `${s.item} ${s.active}` : s.item;
  };

  return (
    <div className={s.navbar}>
      <NavLink to={PATH.PRE_JUNIOR} className={(NavData)=> getNavLinkStyle(NavData)}>
        Pre Junior
      </NavLink>
      <NavLink to={PATH.JUNIOR} className={(NavData)=> getNavLinkStyle(NavData)}>
        Junior
      </NavLink>
      <NavLink to={PATH.JUNIOR_PLUS} className={(NavData)=> getNavLinkStyle(NavData)}>
        Junior Plus
      </NavLink>
      <div className={`${s.item} ${s.menuButton}`}>Menu</div>
    </div>
  );
}

export default Header;
