import React from "react";
import MyDislikedRecipe from "./MyDislikedRecipe";

const MyDislikedRecipes = ({ recipes }) => {
    return (
        <div className="myDislikedRecipes">
            {recipes.map(recipe => <MyDislikedRecipe recipe={recipe}></MyDislikedRecipe>)}
        </div>
    );
};

export default MyDislikedRecipes;
