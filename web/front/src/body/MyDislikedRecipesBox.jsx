import React, { useState } from "react";
import MyDislikedRecipesTitle from "./MyDislikedRecipesTitle";
import MyDislikedRecipes from "./MyDislikedRecipes";
import MoreButton from "./MoreButton";

const MyDislikedRecipesBox = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());

    return (
        <div className="myDislikedRecipesBox">
            <MyDislikedRecipesTitle></MyDislikedRecipesTitle>
            <MyDislikedRecipes recipes={recipes}></MyDislikedRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default MyDislikedRecipesBox;
