import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import Logo from "../../src/header/Logo";

describe('로고 컴포넌트 테스트', () => {
    test('로고는 로고 이미지를 갖습니다.', () => {
        const { container } = render(<Logo />);
        
        const logoImage = container.querySelector('.logoImage');

        expect(logoImage).toBeInTheDocument();
    });

    test('로고이미지는 홈페이지 링크를 갖습니다.', () => {
        const HOME_URL = "/";
        const { container } = render(<Logo logoUrl={HOME_URL}/>);

        const link = container.querySelector('.logoLink');

        expect(link.getAttribute('href')).toBe(HOME_URL);
    });
});
