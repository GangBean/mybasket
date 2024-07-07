import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MainPage from "../../src/body/MainPage";

describe("MainPage component test", () => {
    test("Sections component를 갖습니다.", () => {
        const { container } = render(<MainPage></MainPage>);

        expect(container.querySelector(".sections")).toBeInTheDocument();
    });
});
