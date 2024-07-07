import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MemberHistory from "../../src/body/MemberHistory";

describe("MemberHistory component test", () => {
    test("MyRecipes component를 갖습니다.", () => {
        const { container } = render(<MemberHistory></MemberHistory>);

        expect(container.querySelector(".myRecipes")).toBeInTheDocument();
    });
    test("MoreButton component를 갖습니다.", () => {
        const { container } = render(<MemberHistory></MemberHistory>);

        expect(container.querySelector(".moreButton")).toBeInTheDocument();
    });
});
