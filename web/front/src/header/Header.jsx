import React from "react";
import Logo from "./Logo";
import SearchBar from "./searchBar/SearchBar";
import UserInfo from "./userInfo/UserInfo";
import { HOME_URL } from "../App";
import "./Header.css";

const IMAGE_URL = "/images/logo.jpg";

const Header = ({ isLoggedIn }) => {
    console.log("[HEADER]" + isLoggedIn);
    return (
        <div className="header">
            <Logo imageUrl={IMAGE_URL} logoUrl={HOME_URL}/>
            <SearchBar />
            <UserInfo isLoggedIn={isLoggedIn} />
        </div>
    );
};

export default Header;
