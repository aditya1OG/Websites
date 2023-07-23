import React from "react";
import logo from "./img/logo.png"
const Header = () => {
    return(
        <>
        <div className="header">
            <img src={logo} alt="" height={70} />
            <h1>Aadi Keep</h1>
        </div>
        </>
    );
};

export default Header;