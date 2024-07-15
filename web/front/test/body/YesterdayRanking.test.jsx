import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import YesterdayRanking from "../../src/body/YesterdayRanking";

describe("YesterdayRanking component test", () => {
    test("RankingRecipes를 갖습니다.", () => {
        const { container } = render(<YesterdayRanking getNext={()=>[]}></YesterdayRanking>);

        expect(container.querySelector(".rankingRecipes")).toBeInTheDocument();
    });
    test("MoreButton을 갖습니다.", () => {
        const { container } = render(<YesterdayRanking getNext={()=>[]}></YesterdayRanking>);

        expect(container.querySelector(".moreButton")).toBeInTheDocument();
    });
    test("더보기 버튼을 클릭하면 레시피가 추가됩니다.", async () => {
        const value = Array.from({ length: 10 }).map((_, x) => {
            return { recipeId: x };
        });
        const getNext = () => {
            return value;
        };
        const { container } = render(<YesterdayRanking getNext={getNext}></YesterdayRanking>);

        const moreButton = container.querySelector(".moreButton");
        const prevLength = container.querySelector(".rankingRecipes").querySelectorAll("li").length;
        await fireEvent.click(moreButton);

        const recipes = container.querySelector(".rankingRecipes").querySelectorAll("li");
        expect(recipes.length - prevLength).toBe(10);
    });
});
