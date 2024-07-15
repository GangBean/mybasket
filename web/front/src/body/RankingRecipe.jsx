import React from "react";

export class RankingRecipeModel {
    constructor(id, recipeId, imageUrl, recipeUrl, name, numLike) {
        this.id = id;
        this.recipeId = recipeId;
        this.imageUrl = imageUrl;
        this.recipeUrl = recipeUrl;
        this.name = name;
        this.numLike = numLike;
    }
}

const RankingRecipe = ({ recipe, ranking }) => {
    return (
        <li className="rankingRecipe">
            <Medal ranking={ranking}></Medal>
            <div className="id" hidden={true}>{recipe.id}</div>
            <div className="recipeId" hidden={true}>{recipe.recipeId}</div>
            <img className="recipeImage" src={recipe.imageUrl} style={{ width: '50px', height: '50px' }}></img>
            <a href={recipe.recipeUrl}>{recipe.name}</a>
            <p className="numLike">{recipe.numLike}</p>
        </li>
    );
};

const Medal = ({ ranking }) => {
    const RANKING = {
        FIRST: 0,
        SECOND: 1,
        THIRD: 2,
    };
    if (ranking === RANKING.FIRST) {
        return <GoldenMedal></GoldenMedal>;
    }
    if (ranking === RANKING.SECOND) {
        return <SilverMedal></SilverMedal>;
    }
    if (ranking === RANKING.THIRD) {
        return <BronzeMedal></BronzeMedal>;
    }
    return null;
};

const GoldenMedal = () => {
    return (
        <img src="/images/gold.png" alt="Golden Medal" style={{ width: '20px', height: '20px' }}></img>
    );
};
const SilverMedal = () => {
    return (
        <img src="/images/silver.jpeg" alt="Silver Medal" style={{ width: '20px', height: '20px' }}></img>
    );
};
const BronzeMedal = () => {
    return (
        <img src="/images/bronze.jpeg" alt="Bronze Medal" style={{ width: '20px', height: '20px' }}></img>
    );
};

export default RankingRecipe;
