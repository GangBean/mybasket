import React from "react";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import MyPage from "./MyPage";
import { Pages } from "../App";
import "./Body.css";

const Body = ({ state, isLoggedIn, memberInfo }) => {
    return (
        <div className="body">
            {componentOfState(state, isLoggedIn, memberInfo)}
        </div>
    );
};

const componentOfState = (state, isLoggedIn, memberInfo) => {
    if (state === Pages.MAIN) {
        return (
            <MainPage isLoggedIn={isLoggedIn}></MainPage>
        );
    }
    if (state === Pages.LOGIN) {
        return (
            <LoginPage></LoginPage>
        );
    }
    if (state === Pages.MY_PAGE) {
        return (
            <MyPage isLoggedIn={isLoggedIn} memberInfo={memberInfo}></MyPage>
        );
    }
    throw new InvalidPageStateError(state);
};

class InvalidPageStateError extends Error {
    constructor(state) {
        super("정의되지 않은 페이지 상태입니다: " + state);
    };
};

export default Body;
