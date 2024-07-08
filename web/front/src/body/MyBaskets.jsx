import React from "react";
import MyBasket from "./MyBasket";

const MyBaskets = ({ baskets }) => {
    return (
        <ol className="myBaskets">
            {baskets.map(basket => <MyBasket myBasket={basket}></MyBasket>)}
        </ol>
    );
};

export default MyBaskets;
