import React from "react";
import MyBasket from "./MyBasket";

const MAX_MYBASKET_LENGTH = 5;

const BasketSection = ({ isLoggedIn, myBaskets }) => {
    return (
        <div className="basketSection">
            {isLoggedIn ? <MemberMode myBaskets={myBaskets} /> : <GuestMode />}
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

const MemberMode = ({ myBaskets }) => {
    return (
        <div className="memberMode">
            <MyBaskets myBaskets={myBaskets} />
        </div>
    );
};

const MyBaskets = ({ myBaskets }) => {
    return (
        <ol className="myBaskets">
            {myBaskets.slice(0, MAX_MYBASKET_LENGTH).map(myBasket => <MyBasket key={myBasket.myBasketId} myBasket={myBasket} />)}
        </ol>
    )
}

export default BasketSection;
