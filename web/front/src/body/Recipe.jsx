import React from "react";

export class RecipeModel {
    constructor(id, recipeId, imageUrl, recipeUrl, name) {
        this.id = id;
        this.recipeId = recipeId;
        this.imageUrl = imageUrl;
        this.recipeUrl = recipeUrl;
        this.name = name;
    }
};

const Recipe = ({ myRecipe: recipe }) => {
    return (
        <li className="recipe">
            <div className="id" hidden={true}>{recipe.id}</div>
            <div className="recipeId" hidden={true}>{recipe.recipeId}</div>
            <img className="recipeImage" src={recipe.imageUrl} style={{ width: '50px', height: '50px' }}></img>
            <a href={recipe.recipeUrl}>{recipe.name}</a>
        </li>
    );
};

export default Recipe;
