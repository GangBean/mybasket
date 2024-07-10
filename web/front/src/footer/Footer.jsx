import React from "react";
import Sections from "./Sections";
import "./Footer.css";

const Footer = ({ isLoggedIn }) => {
    return (
        <div className="footer">
            <Sections isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Footer;
