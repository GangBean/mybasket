import React from "react";
import Recipe from "./Recipe";

const Recipes = ({ myRecipes: recipes }) => {
    return (
        <ol className="recipes">
            {recipes.map(recipe => <Recipe key={recipe.id} myRecipe={recipe}></Recipe>)}
        </ol>
    );
};

export default Recipes;
