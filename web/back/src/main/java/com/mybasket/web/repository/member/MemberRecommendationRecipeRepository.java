package com.mybasket.web.repository.member;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mybasket.web.entity.MemberRecommendationRecipe;
import com.mybasket.web.entity.Preference;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Repository
public class MemberRecommendationRecipeRepository {
    private final JdbcTemplate jdbcTemplate;

    public List<MemberRecommendationRecipe> findHistoriesByMemberId(Long memberId, int offset, int limit) {
        String sql = """
                SELECT id
                     , member_id
                     , recipe_id
                     , recommendation_datetime
                     , preference
                  FROM member_recommendation_recipe
                 WHERE member_id = ?
                 ORDER BY recommendation_datetime DESC
                 LIMIT ?, ?
                """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return MemberRecommendationRecipe.builder()
                    .id(rs.getLong("id"))
                    .memberId(rs.getLong("member_id"))
                    .recipeId(rs.getLong("recipe_id"))
                    .recommendationDatetime(rs.getDate("recommendation_datetime"))
                    .preference(Preference.of(rs.getString("preference")))
                    .build();
        }, memberId, offset, limit);
    }

}
