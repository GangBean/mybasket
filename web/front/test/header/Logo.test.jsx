import { render } from "@testing-library/react";
import React from "react";
import Logo from "../../src/header/logo";

describe('로고 컴포넌트 테스트', () => {
    test('로고는 로고 이미지를 갖습니다.', () => {
        const { container } = render(<Logo />);
        
        expect(container.querySelector('.logoImage')).toBeInTheDocument();
    });

    test('로고이미지는 홈페이지 링크를 갖습니다.', () => {
        const { container } = render(<Logo />);

        const link = container.querySelector('.logoImageLink');

        expect(link.getAttribute('href')).toBe('/');
    });
});