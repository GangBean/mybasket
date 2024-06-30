package com.mybasket.web.service;

import org.springframework.stereotype.Service;

import com.mybasket.web.controller.request.RecipeInfoRequest;
import com.mybasket.web.dto.RecipeInfoResponse;
import com.mybasket.web.repository.recipe.RecipeRepository;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public RecipeInfoResponse recipeInfo(RecipeInfoRequest recipeInfoRequest) {
        return RecipeInfoResponse.fromRecipe(
                recipeRepository.findRecipeNo(recipeInfoRequest.getRecipeNo())
                        .orElseThrow(RuntimeException::new));
    }
}
