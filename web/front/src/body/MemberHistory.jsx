import React, { useState } from "react";
import MyRecipe from "./MyRecipe";

const MemberHistory = ({ getNext }) => {
    const [myRecipes, setMyRecipes] = useState([]);
    return (
        <div className="memberHistory">
            <MyRecipes myRecipes={myRecipes}></MyRecipes>
            <MoreButton myRecipes={myRecipes} setMyRecipes={setMyRecipes} getNext={getNext}></MoreButton>
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

const MoreButton = ({ myRecipes, setMyRecipes, getNext }) => {
    const handleClick = () => {
        const nextRecipes = getNext();
        setMyRecipes([...myRecipes, ...nextRecipes]);
    };

    return (
        <button className="moreButton" onClick={handleClick}></button>
    );
};

export default MemberHistory;
