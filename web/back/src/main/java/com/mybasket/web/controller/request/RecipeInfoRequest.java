package com.mybasket.web.controller.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RecipeInfoRequest {
    private final String recipeNo;
}
