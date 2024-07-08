import React from "react";

export class MyRecipeModel {
    constructor(id, recipeId, imageUrl, recipeUrl, name) {
        this.id = id;
        this.recipeId = recipeId;
        this.imageUrl = imageUrl;
        this.recipeUrl = recipeUrl;
        this.name = name;
    }
}

const MyRecipe = ({ myRecipe }) => {
    return (
        <li className="myRecipe">
            <div className="id" hidden={true}>{myRecipe.id}</div>
            <div className="recipeId" hidden={true}>{myRecipe.recipeId}</div>
            <img className="recipeImage" src={myRecipe.imageUrl} style={{ width: '50px', height: '50px' }}></img>
            <a href={myRecipe.recipeUrl}>{myRecipe.name}</a>
        </li>
    );
};

export default MyRecipe;
