import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.headerNav}>
            <div className={s.wrap}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeItem}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.activeItem}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeItem}>Junior Plus</NavLink>
                <span>Menu</span>
            </div>
        </div>
    )
}

export default Header
