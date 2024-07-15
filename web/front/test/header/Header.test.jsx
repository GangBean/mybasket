import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../src/header/header";

describe('Header 컴포넌트 테스트', () => {
    test('Header는 Logo를 갖습니다.', () => {
        const { container } = render(<Header />);

        expect(container.querySelector('.logo')).toBeInTheDocument();
    });

    test('Header는 SearchBar를 갖습니다.', () => {
        const { container } = render(<Header />);

        expect(container.querySelector('.searchBar')).toBeInTheDocument();
    });

    test('Header는 UserInfo를 갖습니다.', () => {
        const { container } = render(<Header />);

        expect(container.querySelector('.userInfo')).toBeInTheDocument();
    });
});