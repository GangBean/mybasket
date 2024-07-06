import React from "react";
import MyBasket from "./MyBasket";

const BasketSection = ({ isLoggedIn }) => {
    return (
        <div className="basketSection">
            {isLoggedIn ? <MemberMode /> : <GuestMode />}
        </div>
    );
};

const GuestMode = () => {
    return (
        <div className="guestMode">
            <LoginInstruction />
        </div>
    );
};

const LoginInstruction = () => {
    return <p className="loginInstruction">서비스를 이용하기 위해 로그인이 필요합니다.</p>;
}

const MemberMode = () => {
    const myBaskets = [];
    return (
        <div className="memberMode">
            <MyBaskets myBaskets={myBaskets}/>
        </div>
    );
};

const MyBaskets = ({ myBaskets }) => {
    return (
        <ol className="myBaskets">
            {myBaskets.map(myBasket => <MyBasket />)}
        </ol>
    )
}

export default BasketSection;
