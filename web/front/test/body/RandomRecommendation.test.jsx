import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomRecommendation from "../../src/body/RandomRecommendation";

describe("RandomRecommendation component test", () => {
    test("MyRecipesBox component를 갖습니다.", () => {
        const { container } = render(<RandomRecommendation getNext={()=>[]}></RandomRecommendation>);

        expect(container.querySelector(".recipesBox")).toBeInTheDocument();
    });
    test("MoreButton component를 갖습니다.", () => {
        const { container } = render(<RandomRecommendation getNext={()=>[]}></RandomRecommendation>);

        expect(container.querySelector(".moreButton")).toBeInTheDocument();
    });
    test("더보기 버튼을 누르면 레시피가 추가됩니다.", async () => {
        const testValue = Array.from({ length: 10 }).map((_, x) => { return { myRecipeId: x }; });
        console.log(testValue);
        const getNext = () => {
            console.log("Get Next 10 recipes"); 
            return testValue;
        };
        const { container } = render(<RandomRecommendation getNext={getNext}></RandomRecommendation>);

        const moreButton = container.querySelector(".moreButton");
        const prevLength = container.querySelector(".recipes").querySelectorAll("li").length;
        await fireEvent.click(moreButton);

        const recipes = container.querySelector(".recipes").querySelectorAll("li");
        expect(recipes.length - prevLength).toBe(10);
    });
});
