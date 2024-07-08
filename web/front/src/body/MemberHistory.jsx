import React, { useState } from "react";
import MyRecipe from "./MyRecipe";
import MoreButton from "./MoreButton";

const MemberHistory = ({ isLoggedIn, getNext }) => {
    return (
        <div className="memberHistory">
            <MemberHistoryTitle></MemberHistoryTitle>
            <LoginWrapper isLoggedIn={isLoggedIn} getNext={getNext}></LoginWrapper>
        </div>
    );
};

const LoginWrapper = ({ isLoggedIn, getNext }) => {
    return (
        <>
            {isLoggedIn ? <MyRecipesBox getNext={getNext}></MyRecipesBox> : null}
        </>
    );
};

const MemberHistoryTitle = () => {
    return (
        <div className="memberHistoryTitle">
            <h2>추천받은 레시피</h2>
        </div>
    );
};

const MyRecipesBox = ({ getNext }) => {
    const [myRecipes, setMyRecipes] = useState(getNext());
    return (
        <div className="myRecipesBox">
            <MyRecipes myRecipes={myRecipes}></MyRecipes>
            <MoreButton recipes={myRecipes} setRecipes={setMyRecipes} getNext={getNext}></MoreButton>
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

export default MemberHistory;
