import React from "react";

export class MyRecommendedRecipeModel {
    constructor(
        id,
        recommendedTime,
        recipeId,
        name,
        imageUrl,
        recipeUrl,
    ) {
        this.id = id;
        this.recommendedTime = recommendedTime;
        this.recipeId = recipeId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.recipeUrl = recipeUrl;
    };
};

const MyRecommendedRecipe = ({ recipe }) => {
    return (
        <div className="myRecommendedRecipe">
            <div className="id" hidden={true}>{recipe.id}</div>
            <div className="recipeId" hidden={true}>{recipe.recipeId}</div>
            <img className="image" src={recipe.imageUrl} alt="image" style={{ width: '100px', height: '100px' }}></img>
            <div className="recommendedTime">{recipe.recommendedTime.toLocaleString()}</div>
            <a className="name" href={recipe.recipeUrl}>{recipe.name}</a>
        </div>
    );
};

export default MyRecommendedRecipe;
