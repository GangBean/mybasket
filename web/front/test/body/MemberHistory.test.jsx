import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import MemberHistory from "../../src/body/MemberHistory";

describe("MemberHistory component test", () => {
    test("MyRecipesBox component를 갖습니다.", () => {
        const { container } = render(<MemberHistory isLoggedIn={true} getNext={() => []}></MemberHistory>);

        expect(container.querySelector(".myRecipesBox")).toBeInTheDocument();
    });
    test("MoreButton component를 갖습니다.", () => {
        const { container } = render(<MemberHistory isLoggedIn={true} getNext={() => []}></MemberHistory>);

        expect(container.querySelector(".moreButton")).toBeInTheDocument();
    });
    test("더보기 버튼을 누르면 레시피가 추가됩니다.", async () => {
        const testValue = Array.from({ length: 10 }).map((_, x) => { return { id: x }; });
        // console.log(testValue);
        const getNext = () => {
            // console.log("Get Next 10 recipes");
            return testValue;
        };
        const { container } = render(<MemberHistory isLoggedIn={true} getNext={getNext}></MemberHistory>);

        const moreButton = container.querySelector(".moreButton");
        
        const prevLength = container.querySelector(".recipes").querySelectorAll("li").length;

        await fireEvent.click(moreButton);
        const recipes = container.querySelector(".recipes").querySelectorAll("li");

        expect(recipes.length - prevLength).toBe(10);
    });
});
