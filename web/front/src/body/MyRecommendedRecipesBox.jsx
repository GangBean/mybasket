import React, { useState } from "react";
import MyRecommendedRecipesTitle from "./MyRecommendedRecipesTitle";
import MyRecommendedRecipes from "./MyRecommendedRecipes";
import MoreButton from "./MoreButton";
import "./MyRecommendedRecipesBox.css";

const MyRecommendedRecipesBox = ({ getNext }) => {
    const [recipes, setRecipes] = useState(getNext());

    return (
        <div className="myRecommendedRecipesBox">
            <MyRecommendedRecipesTitle></MyRecommendedRecipesTitle>
            <MyRecommendedRecipes recipes={recipes}></MyRecommendedRecipes>
            <MoreButton items={recipes} setItems={setRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

export default MyRecommendedRecipesBox;
