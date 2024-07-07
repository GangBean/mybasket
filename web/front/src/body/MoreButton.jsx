import React from "react";

const MoreButton = ({ recipes, setRecipes, getNext }) => {
    const handleClick = () => {
        const nextRecipes = getNext();
        setRecipes([...recipes, ...nextRecipes]);
    };

    return (
        <button className="moreButton" onClick={handleClick}></button>
    );
};

export default MoreButton;
