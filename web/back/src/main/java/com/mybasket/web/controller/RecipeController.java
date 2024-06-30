package com.mybasket.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mybasket.web.controller.request.RecipeInfoRequest;
import com.mybasket.web.dto.RecipeInfoResponse;
import com.mybasket.web.service.RecipeService;

@CrossOrigin(origins = "http://localhost")
@RequestMapping("/api/recipes")
@RestController
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/{recipeNo}")
    public RecipeInfoResponse recipeInfo(
            @PathVariable("recipeNo") String recipeNo) {
        return recipeService.recipeInfo(RecipeInfoRequest.builder()
                .recipeNo(recipeNo)
                .build());
    }
}
