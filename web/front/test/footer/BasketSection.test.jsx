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
        const { container } = render(<BasketSection isLoggedIn={true} myBaskets={[]}/>);

        expect(container.querySelector('.memberMode')).toBeInTheDocument();
    });

    test("로그인 상태에서는 MyBaskets를 갖습니다.", () => {
        const { container } = render(<BasketSection isLoggedIn={true} myBaskets={[]}/>);

        expect(container.querySelector('.myBaskets')).toBeInTheDocument();
    });

    test("MyBaskets는 최대 5개의 리스트만 출력합니다.", () => {
        const input = [
            {
                myBasketId: 1,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 2,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 3,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 4,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 5,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 6,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 7,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 8,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 9,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
            {
                myBasketId: 10,
                myBasketTime: new Date(),
                myBasketBudget: 10000,
            },
        ];
        const { container } = render(<BasketSection isLoggedIn={true} myBaskets={input} />);

        const myBaskets = container.querySelector('.myBaskets').querySelectorAll('li');

        expect(myBaskets.length).toBe(5);
    });
});
