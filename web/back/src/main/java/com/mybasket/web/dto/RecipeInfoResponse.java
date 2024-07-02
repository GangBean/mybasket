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
    private final String recipeUrl;
    private final String imageUrl;
    private final Integer portion;
    private final Integer cookingMinute;
    private final String difficulty;
    private final String description;

    public static RecipeInfoResponse fromRecipe(Recipe recipe) {
        return RecipeInfoResponse.builder()
                .id(recipe.getId())
                .recipeNo(recipe.getRecipeNo())
                .name(recipe.getName())
                .recipeUrl(recipe.getRecipeUrl())
                .imageUrl(recipe.getImageUrl())
                .portion(recipe.getPortion())
                .cookingMinute(recipe.getCookingMinute())
                .difficulty(recipe.getDifficulty())
                .description(recipe.getDecription())
                .build();
    }
}
