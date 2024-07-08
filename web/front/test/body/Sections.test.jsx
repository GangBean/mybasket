import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Sections from "../../src/body/Sections";

describe("Sections component test", () => {
    test("로그인 상태일때 MemberHistory component를 포함합니다.", () => {
        const { container } = render(<Sections isLoggedIn={true}></Sections>);

        expect(container.querySelector(".memberHistory")).toBeInTheDocument();
    });
    test("로그아웃 상태일때 MyRecipesBox component를 포함하지 않습니다.", () => {
        const { container } = render(<Sections isLoggedIn={false}></Sections>);

        expect(container.querySelector(".myRecipesBox")).not.toBeInTheDocument();
    });
    test("YesterdayRanking component를 포함합니다.", () => {
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".yesterdayRanking")).toBeInTheDocument();
    });
    test("AllTimeRanking component를 포함합니다.", () => {
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".allTimeRanking")).toBeInTheDocument();
    });
    test("RandomRecommendation component를 포함합니다.", () => {
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".randomRecommendation")).toBeInTheDocument();
    });
});