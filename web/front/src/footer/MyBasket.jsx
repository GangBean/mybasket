import React from "react";

const MyBasket = ({ myBasket }) => {
    return (
        <li className="myBasket">{myBasket.myBasketBudget}</li>
    );
};

export default MyBasket;
