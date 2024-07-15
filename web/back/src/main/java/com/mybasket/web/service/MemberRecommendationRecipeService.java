package com.mybasket.web.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mybasket.web.controller.response.MemberRecommendationRecipeResponse;
import com.mybasket.web.entity.Recipe;
import com.mybasket.web.repository.RecipeRepository;
import com.mybasket.web.repository.member.MemberRecommendationRecipeRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MemberRecommendationRecipeService {
    private final MemberRecommendationRecipeRepository memberRecommendationRecipeRepository;
    private final RecipeRepository recipeRepository;

    public List<MemberRecommendationRecipeResponse> recommendationHistories(Long memberId, int offset, int limit) {
        return memberRecommendationRecipeRepository
                .findHistoriesByMemberId(memberId, offset, limit)
                .stream()
                .map(history -> {
                    Recipe recipe = recipeRepository.findById(history.getRecipeId())
                            .orElseThrow(() -> new RuntimeException("Recipe Not Exists: " + history.getRecipeId()));
                    return MemberRecommendationRecipeResponse.from(history, recipe);
                }).collect(Collectors.toList());
    }
}
