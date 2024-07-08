import React from "react";

class MyBasketModel {
    constructor(id, basketTime, budget, numProducts, numRecipes, totalPrice) {
        this.id = id;
        this.basketTime = basketTime;
        this.budget = budget;
        this.numProducts = numProducts;
        this.numRecipes = numRecipes;
        this.totalPrice = totalPrice;
    };
};

const MyBasket = ({ myBasket }) => {
    return (
        <div className="myBasket">
            <div className="id" hidden={true}>{myBasket.id}</div>
            <img className="basketImage" src="" alt="basket"></img>
            <div className="basketBudget">{myBasket.budget}</div>
            <div className="basketNumProducts">{myBasket.numProducts}</div>
            <div className="basketNumRecipes">{myBasket.numRecipes}</div>
            <div className="basketTotalPrice">{myBasket.totalPrice}</div>
        </div>
    );
};

export default MyBasket;
