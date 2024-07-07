import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
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
    test("더보기 버튼을 누르면 한번에 최대 10개의 레시피가 추가됩니다.", async () => {
        const testValue = Array.from({ length: 10 }).map((_, x) => { return { myRecipeId: x }; });
        console.log(testValue);
        const getNext = () => {
            console.log("Get Next 10 recipes"); 
            return testValue;
        };
        const { container } = render(<MemberHistory getNext={getNext}></MemberHistory>);

        const moreButton = container.querySelector(".moreButton");
        await fireEvent.click(moreButton);

        const recipes = container.querySelector(".myRecipes").querySelectorAll("li");
        expect(recipes.length).toBe(10);
    });
});
