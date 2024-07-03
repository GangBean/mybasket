package com.mybasket.web.controller.response;

import java.sql.Date;

import com.mybasket.web.entity.MemberRecommendationRecipe;
import com.mybasket.web.entity.Preference;
import com.mybasket.web.entity.Recipe;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberRecommendationRecipeResponse {
    private final Long id;
    private final Long memberId;
    private final Long recipeId;
    private final Date recommendationDatetime;
    private final Preference preference;
    private final String name;
    private final String description;
    private final String recipeUrl;
    private final String imageUrl;

    public static MemberRecommendationRecipeResponse from(
            MemberRecommendationRecipe memberRecommendationRecipe,
            Recipe recipe) {
        return MemberRecommendationRecipeResponse.builder()
                .id(memberRecommendationRecipe.getId())
                .memberId(memberRecommendationRecipe.getMemberId())
                .recipeId(memberRecommendationRecipe.getRecipeId())
                .recommendationDatetime(memberRecommendationRecipe.getRecommendationDatetime())
                .preference(memberRecommendationRecipe.getPreference())
                .name(recipe.getName())
                .description(recipe.getDescription())
                .recipeUrl(recipe.getRecipeUrl())
                .imageUrl(recipe.getImageUrl())
                .build();
    }
}
