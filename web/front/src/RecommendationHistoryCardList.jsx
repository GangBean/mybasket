import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecommendationHistoryCardList = ({ isLoggedIn }) => {
    return isLoggedIn ? <MemberRecommendationHistories /> : <LoginNeeded />;
}

const LoginNeeded = () => {
    return <p>Please log in to see recommended recipes.</p>;
}

const MemberRecommendationHistories = () => {
    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 10;

    useEffect(() => {
        axios.get(`http://localhost:8080/api/recommendations/histories?offset=${offset}&limit=${limit}`, { withCredentials: true })
            .then(response => {
                if (response.data.length > 0) {
                    setRecipes(prevRecipes => [...prevRecipes, ...response.data]);
                    setOffset(offset + limit);
                    console.log("[Histories] ", response.data);
                } else {
                    console.log("There are no more recipes");
                }
            })
            .catch(error => {
                console.error("Error getting recommendation histories", error);
            });
    }, [offset]);

    return (
        <ol>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    recipeName={recipe.name}
                    recipeUrl={recipe.recipeUrl}
                    imageUrl={recipe.imageUrl}
                />
            ))}
        </ol>
    );
};

export default RecommendationHistoryCardList;
