import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../../src/footer/Footer";

describe("Footer component test", () => {
    test("Footer는 Sections를 갖습니다.", () => {
        const { container } = render(<Footer />);

        expect(container.querySelector('.sections')).toBeInTheDocument();
    });
});
