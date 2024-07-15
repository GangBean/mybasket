import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("App component test", () => {
    test("Header 를 갖습니다.", () => {
        const { container } = render(<App></App>);

        expect(container.querySelector(".header")).toBeInTheDocument();
    });
    test("Body 를 갖습니다.", () => {
        const { container } = render(<App></App>);

        expect(container.querySelector(".body")).toBeInTheDocument();
    });
    test("Footer 를 갖습니다.", () => {
        const { container } = render(<App></App>);

        expect(container.querySelector(".footer")).toBeInTheDocument();
    });
});