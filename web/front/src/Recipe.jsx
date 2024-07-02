import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipe = ({ recipeNo }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/recipes/${recipeNo}`)
            .then(response => {
                if (response.data) {
                    setRecipe(response.data);
                    console.log("Recipe " + recipeNo + " : " + response.data);
                }
            })
            .catch(error => {
                console.log("Error getting recipe " + recipeNo, error);
            });
    }, [recipeNo]); // Add recipeNo as a dependency to re-fetch if it changes

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Recipe">
            <img className="Recipe-image" src={recipe.imageUrl} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <a href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer">View Recipe</a>
        </div>
    );
};

export default Recipe;
