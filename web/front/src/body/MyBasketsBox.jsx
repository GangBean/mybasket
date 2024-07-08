import React, { useState } from "react";
import MyBasketsTitle from "./MyBasketsTitle";
import MyBaskets from "./MyBaskets";
import MoreButton from "./MoreButton";

const MyBasketsBox = ({ getNext }) => {
    const [baskets, setBaskets] = useState(getNext());
    return (
        <div className="myBasketsBox">
            <MyBasketsTitle></MyBasketsTitle>
            <MyBaskets baskets={baskets}></MyBaskets>
            <MoreButton items={baskets} setItems={setBaskets} getNext={getNext}></MoreButton>
        </div>
    );
};

export default MyBasketsBox;
