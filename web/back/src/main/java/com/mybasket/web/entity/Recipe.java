package com.mybasket.web.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Recipe {
    private Long id;
    private String recipeNo;
    private String name;
    private String category;
    private String recipeUri;
    private String imageUri;
    private String volume;
    private Integer cookingTime;
    private String difficulty;
}
