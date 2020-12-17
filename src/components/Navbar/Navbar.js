import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={n.navbar}>
            <div className={n.items}>
                <div className={n.item}><NavLink activeClassName={n.activeLink} to="/profile">Profile</NavLink></div>
                <div className={n.item}><NavLink activeClassName={n.activeLink} to="/dialogs">Message</NavLink></div>
                <div className={n.item}><NavLink activeClassName={n.activeLink} to="/news">News</NavLink></div>
                <div className={n.item}><NavLink activeClassName={n.activeLink} to="/settings">Settings</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar;