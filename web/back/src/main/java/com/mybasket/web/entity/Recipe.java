package com.mybasket.web.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Recipe {
    private Long id;
    private String name;
    private String description;
    private String recipeUrl;
    private String imageUrl;
}
