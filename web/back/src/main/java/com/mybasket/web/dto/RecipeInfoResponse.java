package com.mybasket.web.dto;

import com.mybasket.web.entity.Recipe;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RecipeInfoResponse {
    private final Long id;
    private final String recipeNo;
    private final String name;
    private final String category;
    private final String recipeUri;
    private final String imageUri;
    private final String volume;
    private final Integer cookingTime;
    private final String difficulty;

    public static RecipeInfoResponse fromRecipe(Recipe recipe) {
        return RecipeInfoResponse.builder()
                .id(recipe.getId())
                .recipeNo(recipe.getRecipeNo())
                .name(recipe.getName())
                .category(recipe.getCategory())
                .recipeUri(recipe.getRecipeUri())
                .imageUri(recipe.getImageUri())
                .volume(recipe.getVolume())
                .cookingTime(recipe.getCookingTime())
                .difficulty(recipe.getDifficulty())
                .build();
    }
}
