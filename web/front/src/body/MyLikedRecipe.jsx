import React from "react";

export class MyLikedRecipeModel {
    constructor(
        id,
        reactTime,
        recipeId,
        name,
        imageUrl,
        recipeUrl,
    ) {
        this.id = id;
        this.reactTime = reactTime;
        this.recipeId = recipeId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.recipeUrl = recipeUrl;
    };
};

const MyLikedRecipe = ({ recipe }) => {
    return (
        <div className="myLikedRecipe">
            <div className="id" hidden={true}>{recipe.id}</div>
            <div className="recipeId" hidden={true}>{recipe.recipeId}</div>
            <img src={recipe.imageUrl} alt="recipeImage"></img>
            <a href={recipe.recipeUrl}>{recipe.name}</a>
        </div>
    );
};

export default MyLikedRecipe;
