import React from "react";
import RecipesBox from "./RecipesBox";

const MyRecipesBox = ({ isLoggedIn, getNext }) => {
    return (
        <div className="myRecipesBox">
            {isLoggedIn ? <RecipesBox getNext={getNext}></RecipesBox> : null}
        </div>
    );
};

export default MyRecipesBox;
