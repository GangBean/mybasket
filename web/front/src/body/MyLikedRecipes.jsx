import React from "react";
import MyLikedRecipe from "./MyLikedRecipe";

const MyLikedRecipes = ({ recipes }) => {
    return (
        <div className="myLikedRecipes">
            {recipes.map(recipe => <MyLikedRecipe recipe={recipe}></MyLikedRecipe>)}
        </div>
    );
};

export default MyLikedRecipes;
