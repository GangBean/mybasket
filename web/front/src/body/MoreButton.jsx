import React from "react";

const MoreButton = ({ items, setItems, getNext }) => {
    const handleClick = () => {
        const nextItems = getNext();
        setItems([...items, ...nextItems]);
    };

    return (
        <button className="moreButton" onClick={handleClick}>더보기</button>
    );
};

export default MoreButton;
