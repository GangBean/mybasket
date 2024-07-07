import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sections from "../../src/footer/Sections";

describe("Sections component test", () => {
    test("Sections는 BasketSection을 갖습니다.", () => {
        const { container } = render(<Sections />);

        expect(container.querySelector('.basketSection')).toBeInTheDocument();
    });

    test("Sections는 RecommendationSection을 갖습니다", () => {
        const { container } = render(<Sections />);

        expect(container.querySelector('.recommendationSection')).toBeInTheDocument();
    });
});
