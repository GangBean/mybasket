import React, { useState } from "react";
import Recipes from "./Recipes";
import MoreButton from "./MoreButton";

const RecipesBox = ({ getNext }) => {
    const [myRecipes, setMyRecipes] = useState(getNext());
    return (
        <div className="recipesBox">
            <Recipes myRecipes={myRecipes}></Recipes>
            <MoreButton items={myRecipes} setItems={setMyRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default RecipesBox;
