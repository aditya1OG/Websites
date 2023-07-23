import React from "react";
const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
        <footer>
            <hr />
            <p className="newpara mt-">copyright © {year}</p>
        </footer>
        </>
    );
};

export default Footer;