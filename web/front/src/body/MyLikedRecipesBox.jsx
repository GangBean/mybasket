import React, { useState } from "react";
import MyLikedRecipesTitle from "./MyLikedRecipesTitle";
import MyLikedRecipes from "./MyLikedRecipes";
import MoreButton from "./MoreButton";

const MyLikedRecipesBox = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());

    return (
        <div className="myLikedRecipesBox">
            <MyLikedRecipesTitle></MyLikedRecipesTitle>
            <MyLikedRecipes recipes={recipes}></MyLikedRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default MyLikedRecipesBox;
