import React, { useState } from "react";
import MyBasketsBox from "./MyBasketsBox";
import MyRecommendedRecipesBox from "./MyRecommendedRecipesBox";
import MyLikedRecipesBox from "./MyLikedRecipesBox";
import MyDislikedRecipesBox from "./MyDislikedRecipesBox";
import { MyBasketModel } from "./MyBasket";
import { MyRecommendedRecipeModel } from "./MyRecommendedRecipe";
import { MyLikedRecipeModel } from "./MyLikedRecipe";
import { MyDislikedRecipeModel } from "./MyDislikedRecipe";

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
    return [
        new MyBasketModel(1, new Date(), 50000, 5, 3, 48000),
    ];
};

const getNextMyRecommendedRecipes = () => {
    return [
        new MyRecommendedRecipeModel(
            1, new Date(), 1,
            "일본가정식, 서양에는 없는 일본의 서양파스타 나포리탄 ( ´ ▽ ` )ﾉ",
            "https://recipe1.ezmember.co.kr/cache/recipe/2018/12/12/57ee955477765269ab191e76095d68191.jpg",
            "https://www.10000recipe.com/recipe/6901822"
        ),
    ];
};

const getNextMyLikedRecipes = () => {
    return [
        new MyLikedRecipeModel(
            1,
            new Date(),
            1,
            "돼지고기 김치찌개 맛내는 비법",
            "https://recipe1.ezmember.co.kr/cache/recipe/2015/08/25/a01d013a6b6f9d526c43f4659db2cd61.jpg",
            "https://www.10000recipe.com/recipe/1785098"
        ),
    ];
};

const getNextMyDislikedRecipes = () => {
    return [
        new MyDislikedRecipeModel(
            1,
            new Date(),
            1,
            "즉석 오이무침 만드는 법, 아삭아삭 상큼한 오이무침, 밑반찬",
            "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/04/9f0011ecaaffe13ae2d4cb79c12af93a1.jpg",
            "https://www.10000recipe.com/recipe/6907661"
        ),
    ];
};

export default Tabs;
