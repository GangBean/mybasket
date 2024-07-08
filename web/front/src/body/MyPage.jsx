import React from "react";
import { Pages } from "../App";
import Tabs from "./Tabs";

const MyPage = ({ isLoggedIn, memberInfo, setPage }) => {
    return (
        <div className="myPage">
            <Wrapper isLoggedIn={isLoggedIn} memberInfo={memberInfo} setPage={setPage}></Wrapper>
        </div>
    );
};

const Wrapper = ({ isLoggedIn, memberInfo, setPage }) => {
    return (
        <>
            {isLoggedIn ? <Tabs memberInfo={memberInfo}/> : <LoginBox setPage={setPage} />}
        </>
    );
};

const LoginBox = ({ setPage }) => {
    return (
        <div className="loginBox">
            <LoginInstruction />
            <LoginPageButton setPage={setPage} />
        </div>
    );
};

const LoginInstruction = () => {
    return (
        <div className="loginInstruction">
            <h1>마이 페이지는 로그인이 필요합니다.</h1>
        </div>
    );
};

const LoginPageButton = ({ setPage }) => {
    const handleClick = () => {
        setPage(Pages.LOGIN);
    };

    return (
        <div className="loginPageButton">
            <a onClick={handleClick}></a>
        </div>
    );
};

export default MyPage;
