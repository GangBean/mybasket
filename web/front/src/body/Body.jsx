import React from "react";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import MyPage from "./MyPage";

const Body = ({ state }) => {
    return (
        <div className="body">
            {componentOfState(state)}
        </div>
    );
}

const componentOfState = (state) => {
    const Pages = {
        MAIN: "main",
        LOGIN: "login",
        MyPAGE: "myPage",
    };
    if (state === Pages.MAIN) {
        return (
            <MainPage></MainPage>
        );
    }
    if (state === Pages.LOGIN) {
        return (
            <LoginPage></LoginPage>
        );
    }
    if (state === Pages.MyPAGE) {
        return (
            <MyPage></MyPage>
        );
    }
    throw new InvalidPageStateError(state);
};

class InvalidPageStateError extends Error {
    constructor(state) {
        super("정의되지 않은 페이지 상태입니다: " + state);
    }
};

export default Body;
