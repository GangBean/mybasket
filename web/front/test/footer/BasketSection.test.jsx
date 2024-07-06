import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BasketSection from "../../src/footer/BasketSection";

describe("BasketSection component test", () => {
    test("로그아웃 상태에서는 GuestMode를 갖습니다.", () => {
        const { container } = render(<BasketSection isLoggedIn={false} />);

        expect(container.querySelector('.guestMode')).toBeInTheDocument();
    });

    test("로그아웃 상태에서는 LoginInstruction을 갖습니다.", () => {
        const { container } = render(<BasketSection isLoggedIn={false} />);

        expect(container.querySelector('.loginInstruction')).toBeInTheDocument();
    });

    test("로그인 상태에서는 MemberMode를 갖습니다.", () => {
        const { container } = render(<BasketSection isLoggedIn={true} />);

        expect(container.querySelector('.memberMode')).toBeInTheDocument();
    });

    test("로그인 상태에서는 MyBaskets를 갖습니다.", () => {
        const { container } = render(<BasketSection isLoggedIn={true} />);

        expect(container.querySelector('.myBaskets')).toBeInTheDocument();
    });
});
