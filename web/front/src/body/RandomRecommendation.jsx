import React, { useState } from "react";
import MyRecipe from "./MyRecipe";
import MoreButton from "./MoreButton";

const RandomRecommendation = ({ getNext }) => {
    const [myRecipes, setMyRecipes] = useState(getNext());
    return (
        <div className="randomRecommendation">
            <RandomRecommendationTitle></RandomRecommendationTitle>
            <MyRecipes myRecipes={myRecipes}></MyRecipes>
            <MoreButton recipes={myRecipes} setRecipes={setMyRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

const RandomRecommendationTitle = () => {
    return (
        <div className="randomRecommendationTitle">
            <h2>색다른 레시피</h2>
        </div>
    );
};

const MyRecipes = ({ myRecipes }) => {
    return (
        <ol className="myRecipes">
            {myRecipes.map(myRecipe => <MyRecipe key={myRecipe.id} myRecipe={myRecipe}></MyRecipe>)}
        </ol>
    );
};

export default RandomRecommendation;
