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
                 , recipe_url
                 , image_url
                 , portion
                 , cooking_minute
                 , difficulty
                 , description
              FROM recipe
             WHERE recipe_no = ?
        """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return Recipe.builder()
            .id(rs.getLong("id"))
            .recipeNo(rs.getString("recipe_no"))
            .name(rs.getString("name"))
            .recipeUrl(rs.getString("recipe_url"))
            .imageUrl(rs.getString("image_url"))
            .portion(rs.getInt("portion"))
            .cookingMinute(rs.getInt("cooking_minute"))
            .difficulty(rs.getString("difficulty"))
            .decription(rs.getString("description"))
            .build();
        }, recipeNo).stream().findAny();
    }
}
