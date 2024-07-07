import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Sections from "../../src/body/Sections";

describe("Sections component test", () => { 
    test("MemberHistory component를 포함합니다.", ()=>{
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".memberHistory")).toBeInTheDocument();
    });
    test("YesterdayRanking component를 포함합니다.", ()=>{
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".yesterdayRanking")).toBeInTheDocument();
    });
    test("AllTimeRanking component를 포함합니다.", ()=>{
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".allTimeRanking")).toBeInTheDocument();
    });
    test("RandomRecommendation component를 포함합니다.", ()=>{
        const { container } = render(<Sections></Sections>);

        expect(container.querySelector(".randomRecommendation")).toBeInTheDocument();
    });
});