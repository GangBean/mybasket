import React from "react";
import MemberHistory from "./MemberHistory";
import YesterdayRanking from "./YesterdayRanking";
import AllTimeRanking from "./AllTimeRanking";
import RandomRecommendation from "./RandomRecommendation";
import { MyRecipeModel } from "./MyRecipe";
import { RankingRecipeModel } from "./RankingRecipe";

const getNextRecipe = () => {
    console.log("[MemberHistory] get next recipes...");
    const myRecipes = [
        new MyRecipeModel(1, 1, "https://recipe1.ezmember.co.kr/cache/recipe/2018/12/09/c1c5b9a230ee12efe9a3a4fd115b8c291.jpg", "https://www.10000recipe.com/recipe/6901578", "예사롭지 않은 스테이크"),
    ];
    return myRecipes;
};

const getNextRanking = () => {
    console.log("[MemberHistory] get next rankings...");
    const rankingRecipes = [
        new RankingRecipeModel(1, 1, "https://recipe1.ezmember.co.kr/cache/recipe/2024/02/16/c1ff3ffc4ad1d74e69ba0f127aa37cf71.jpg", "https://www.10000recipe.com/recipe/7020127", "베이컨 반찬 베이컨숙주볶음 레시피"),
    ];
    return rankingRecipes;
}

const Sections = ({ isLoggedIn }) => {
    return (
        <div className="sections">
            <MemberHistory isLoggedIn={isLoggedIn} getNext={getNextRecipe}></MemberHistory>
            <YesterdayRanking getNext={getNextRanking}></YesterdayRanking>
            <AllTimeRanking getNext={getNextRanking}></AllTimeRanking>
            <RandomRecommendation getNext={getNextRecipe}></RandomRecommendation>
        </div>
    );
};

export default Sections;
