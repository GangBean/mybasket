import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RecommendationSection from "../../src/footer/RecommendationSection";

describe("RecommendationSection Component test", () => {
    test("로그아웃 상태에서는 GuestMode 를 갖습니다.", () => {
        const { container } = render(<RecommendationSection isLoggedIn={false} />);

        expect(container.querySelector('.guestMode')).toBeInTheDocument();
    });

    test("로그아웃 상태에서는 LoginButton 을 갖습니다.", () => {
        const { container } = render(<RecommendationSection isLoggedIn={false} />);

        expect(container.querySelector('.loginButton')).toBeInTheDocument();
    });

    test("로그인 상태에서는 MemberMode 를 갖습니다.", () => {
        const { container } = render(<RecommendationSection isLoggedIn={true} />);

        expect(container.querySelector('.memberMode')).toBeInTheDocument();
    });

    test("로그인 상태에서는 RecommendationBox 를 갖습니다.", () => {
        const { container } = render(<RecommendationSection isLoggedIn={true} />);

        expect(container.querySelector('.recommendationBox')).toBeInTheDocument();
    });
});
