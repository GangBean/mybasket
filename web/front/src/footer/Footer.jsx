import React from "react";
import Sections from "./Sections";

const Footer = ({ isLoggedIn }) => {
    return (
        <div className="footer">
            <Sections isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Footer;
