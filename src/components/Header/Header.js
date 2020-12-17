import React from "react";
import h from './Header.module.css';
import { Button } from "react-bootstrap";


const Header = ()=>{
    return(
        <div className={h.header}>
            <div className={h.header_navbar}>
                <img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Coffee-Logo-Transparent-Background.png"/>
                <p className={h.logo_name}>Coffee Life</p>
            </div>
        </div>
    )
}
export default Header;