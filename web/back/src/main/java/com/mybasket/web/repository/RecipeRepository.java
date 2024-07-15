package com.mybasket.web.repository;

import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mybasket.web.entity.Recipe;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Repository
public class RecipeRepository {
    private final JdbcTemplate jdbcTemplate;

    public Optional<Recipe> findById(Long id) {
        String sql = """
                SELECT id
                     , name
                     , description
                     , recipe_url
                     , image_url
                  FROM recipe
                 WHERE id = ?
                """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return Recipe.builder()
                    .id(rs.getLong("id"))
                    .name(rs.getString("name"))
                    .description(rs.getString("description"))
                    .recipeUrl(rs.getString("recipe_url"))
                    .imageUrl(rs.getString("image_url"))
                    .build();
        }, id).stream().findAny();
    }
}
