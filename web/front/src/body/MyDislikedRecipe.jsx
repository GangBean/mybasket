import React from "react";

export class MyDislikedRecipeModel {
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

const MyDislikedRecipe = ({ recipe }) => {
    return (
        <div className="myDislikedRecipe">
            <div className="id" hidden={true}>{recipe.id}</div>
            <div className="recipeId" hidden={true}>{recipe.recipeId}</div>
            <img src={recipe.imageUrl} alt="recipeImage"></img>
            <a href={recipe.recipeUrl}>{recipe.name}</a>
        </div>
    );
};

export default MyDislikedRecipe;
