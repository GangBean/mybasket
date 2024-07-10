import React from "react";

export class MyBasketModel {
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
            <div className="basketTime">생성 일시: {myBasket.basketTime.toLocaleString()}</div>
            <div className="basketBudget">예산: {myBasket.budget} 원</div>
            <div className="basketNumProducts">상품 수: {myBasket.numProducts} 개</div>
            <div className="basketNumRecipes">추천 레시피 수: {myBasket.numRecipes} 개</div>
            <div className="basketTotalPrice">총액: {myBasket.totalPrice} 원</div>
        </div>
    );
};

export default MyBasket;
