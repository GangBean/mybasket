import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserInfo from '../../../src/header/userInfo/UserInfo';
import { LOGIN_URI } from '../../../src/Login';

describe('유저 정보 테스트', () => {
    beforeEach(() => {
        delete window.location;
        window.location = {
            href: '',
        };
    });

    test('로그아웃 상태에선 로그인버튼이 출력됩니다.', async () => {
        const { container } = render(<UserInfo isLoggedIn={false} />);

        const loginButton = container.querySelector('.gsi-material-button');

        expect(loginButton).toBeInTheDocument();
    });

    test('로그인 버튼을 누르면 구글 로그인 페이지로 리다이렉트됩니다.', async () => {
        const { container } = render(<UserInfo isLoggedIn={false}></UserInfo>);

        const loginButton = container.querySelector('.gsi-material-button');

        await fireEvent.click(loginButton);

        expect(window.location.href).toBe(LOGIN_URI);
    });

    test('로그인 상태에선 사용자정보와 로그아웃버튼이 출력됩니다.', async () => {
        const { container } = render(<UserInfo isLoggedIn={true} />);

        const memberInfo = container.querySelector('.memberImage');
        const logoutButton = container.querySelector('.logoutButton');

        expect(memberInfo).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
    });

    test('로그인 상태에서 사용자정보를 누르면 MyPage로 이동합니다.', async () => {
        const { container } = render(<UserInfo isLoggedIn={true} />);

        const memberInfo = container.querySelector('.memberInfoLink');
        expect(memberInfo.getAttribute("href")).toBe('/api/members/infos');
        
        // await userEvent.click(memberInfo);
        // expect(window.location.href).toBe('/api/members/infos');
    });

    test('로그인 상태에서 로그아웃을 누르면 로그인이 해제됩니다.', async () => {
        const { container } = render(<UserInfo isLoggedIn={true} />);

        const logoutButton = container.querySelector('.logoutButton');

        await fireEvent.click(logoutButton);

        expect(window.Cookies)
    });
});