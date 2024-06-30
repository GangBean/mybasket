package com.mybasket.web.repository.recipe;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mybasket.web.entity.Recipe;

@Repository
public class RecipeRepository {
    private final JdbcTemplate jdbcTemplate;

    public RecipeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Optional<Recipe> findRecipeNo(String recipeNo) {
        String sql = """
            SELECT id
                 , recipe_no
                 , name
                 , category
                 , recipe_uri
                 , image_uri
                 , volume
                 , cooking_time
                 , difficulty 
              FROM recipe
             WHERE recipe_no = ?
        """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return Recipe.builder()
            .id(rs.getLong("id"))
            .recipeNo(rs.getString("recipe_no"))
            .name(rs.getString("name"))
            .category(rs.getString("category"))
            .recipeUri(rs.getString("recipe_uri"))
            .imageUri(rs.getString("image_uri"))
            .volume(rs.getString("volume"))
            .cookingTime(rs.getInt("cooking_time"))
            .difficulty(rs.getString("difficulty"))
            .build();
        }, recipeNo).stream().findAny();
    }
}
