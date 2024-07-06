import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar/SearchBar";
import UserInfo from "./userInfo/UserInfo";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <SearchBar />
            <UserInfo />
        </div>
    );
};

export default Header;
