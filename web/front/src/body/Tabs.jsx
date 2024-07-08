import React, { useState } from "react";
import MyBasketsBox from "./MyBasketsBox";
import MyRecommendedRecipesBox from "./MyRecommendedRecipesBox";
import MyLikedRecipesBox from "./MyLikedRecipesBox";
import MyDislikedRecipesBox from "./MyDislikedRecipesBox";

const Tab = {
    INFO: 'info',
    RECOMMENDATION: 'recommendation',
};

const Tabs = ({ memberInfo }) => {
    const [tab, setTab] = useState(Tab.INFO);
    return (
        <div className="tabs">
            <TabButton tab={tab} setTab={setTab}></TabButton>
            <Wrapper tab={tab} memberInfo={memberInfo}></Wrapper>
        </div>
    );
};

const Wrapper = ({ tab, memberInfo }) => {
    if (tab === Tab.INFO) {
        return <InfoTab memberInfo={memberInfo}></InfoTab>;
    }
    if (tab == Tab.RECOMMENDATION) {
        return <RecommendationTab></RecommendationTab>;
    }
    throw new Error("[Tabs] 정의되지 않은 tab 상태입니다: " + tab);
};

const TabButton = ({ tab, setTab }) => {
    const handleChange = (event) => {
        setTab(event.target.value);
    };

    return (
        <form>
            <label>
                <input type='radio' value={Tab.INFO} checked={tab === Tab.INFO} onChange={handleChange}></input>
                사용자 정보
            </label>
            <label>
                <input type='radio' value={Tab.RECOMMENDATION} checked={tab === Tab.RECOMMENDATION} onChange={handleChange}></input>
                추천
            </label>
        </form>
    );
};

const InfoTab = ({ memberInfo }) => {
    return (
        <div className="infoTab">
            <input value={memberInfo.email}></input>
            <input value={memberInfo.name}></input>
            <button>수정</button>
            <button>취소</button>
        </div>
    );
};

const RecommendationTab = () => {
    return (
        <div className="recommendationTab">
            <MyBasketsBox getNext={getNextMyBaskets}></MyBasketsBox>
            <MyRecommendedRecipesBox getNext={getNextMyRecommendedRecipes}></MyRecommendedRecipesBox>
            <MyLikedRecipesBox getNext={getNextMyLikedRecipes}></MyLikedRecipesBox>
            <MyDislikedRecipesBox getNext={getNextMyDislikedRecipes}></MyDislikedRecipesBox>
        </div>
    );
};

const getNextMyBaskets = () => {
    return [];
};

const getNextMyRecommendedRecipes = () => {
    return [];
};

const getNextMyLikedRecipes = () => {
    return [];
};

const getNextMyDislikedRecipes = () => {
    return [];
};

export default Tabs;
