package com.mybasket.web.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Recipe {
    private Long id;
    private String recipeNo;
    private String name;
    private String decription;
    private String recipeUrl;
    private String imageUrl;
    // private String category;
    private Integer portion;
    private Integer cookingMinute;
    private String difficulty;
}
