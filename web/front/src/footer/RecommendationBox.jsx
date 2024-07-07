import React, { useState } from "react";

const RecommendationBox = ({ onSubmit }) => {
    const [budget, setBudget] = useState(0);
    return (
        <div className="recommendationBox">
            <BudgetInput setBudget={setBudget} />
            <RecommendationButton budget={budget} onSubmit={onSubmit} />
        </div>
    );
};

const BudgetInput = ({ setBudget }) => {
    const handleChange = (event) => {
        console.log(event.target.value + " / " + typeof(event.target.value));
        const value = Number(event.target.value);
        setBudget(value);
    };

    return (
        <input className="budgetInput" onChange={handleChange}></input>
    );
};

const RecommendationButton = ({ budget, onSubmit }) => {
    const positiveInt = (budget) => {
        const numBudget = Number(budget);
        if (isNaN(numBudget) || !Number.isInteger(numBudget) || numBudget <= 0) {
            throw new BudgetRangeError(budget);
        }
        return numBudget;
    }

    const handleClick = () => {
        onSubmit(positiveInt(budget));
    };

    return (
        <button className="recommendationButton" onClick={handleClick}></button>
    );
};

export class BudgetRangeError extends Error {
    constructor(budget) {
        super('예산은 양의 정수만 입력가능합니다: ' + budget)
        this.name = "BudgetRangeError";
    }
}

export default RecommendationBox;
