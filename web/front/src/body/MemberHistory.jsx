import React, { useState } from "react";
import MyRecipe from "./MyRecipe";
import MoreButton from "./MoreButton";

const MemberHistory = ({ getNext }) => {
    const [myRecipes, setMyRecipes] = useState([]);
    return (
        <div className="memberHistory">
            <MyRecipes myRecipes={myRecipes}></MyRecipes>
            <MoreButton recipes={myRecipes} setRecipes={setMyRecipes} getNext={getNext}></MoreButton>
        </div>
    );
};

const MyRecipes = ({ myRecipes }) => {
    return (
        <ol className="myRecipes">
            {myRecipes.map(myRecipe => <MyRecipe key={myRecipe.myRecipeId} myRecipe={myRecipe}></MyRecipe>)}
        </ol>
    );
};

export default MemberHistory;
