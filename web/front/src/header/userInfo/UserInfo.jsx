import React from "react";
import Cookies from "js-cookie";
import LoginButton from "../../Login";

const UserInfo = ({ isLoggedIn, memberImageUrl }) => {
    return (
        <div>
            {isLoggedIn ?
                (<MemberInfo imageUrl={memberImageUrl} />) :
                (<GuestInfo isLoggedIn={isLoggedIn} />)}
        </div>
    );
};

const GuestInfo = ({ isLoggedIn }) => {
    return (
        <div>
            <p>로그인이 필요합니다.</p>
            <LoginButton isLoggedIn={isLoggedIn} />
        </div>
    )
}

const MemberInfo = ({ memberImageUrl }) => {
    return (
        <div className="memberImage">
            <a href="/api/members/infos" className="memberInfoLink">
                <img src={memberImageUrl}></img>
            </a>
            <LogoutButton />
        </div>
    );
};

const LogoutButton = () => {
    const logout = () => {
        const allCookies = Cookies.get(); // 모든 쿠키 가져오기
        for (let cookie in allCookies) {
            console.log('remove cookie: ' + cookie);
            Cookies.remove(cookie, { path: '/' }); // 각각의 쿠키 삭제
        }
        console.log('All cookies removed');
    };

    return (
        <div className="logoutButton">
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default UserInfo;
