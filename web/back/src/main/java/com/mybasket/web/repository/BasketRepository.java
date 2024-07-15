package com.mybasket.web.repository;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mybasket.web.entity.Basket;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Repository
public class BasketRepository {
    private final JdbcTemplate jdbcTemplate;

    public List<Basket> findBasketsByMemberId(Long memberId, int offset, int limit) {
        String sql = """
                SELECT id
                     , member_id
                     , basket_datetime
                     , budget
                     , total_amount
                     , recipe_count
                     , ingredient_count
                  FROM basket
                 WHERE member_id = ?
                 ORDER BY basket_datetime DESC
                 LIMIT ? OFFSET ?
                """;
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return Basket.builder()
                    .id(rs.getLong("id"))
                    .memberId(rs.getLong("member_id"))
                    .basketTime(rs.getDate("basket_datetime"))
                    .budget(rs.getLong("budget"))
                    .totalAmount(rs.getLong("total_amount"))
                    .recipeCount(rs.getLong("recipe_count"))
                    .ingredientCount(rs.getLong("ingredient_count"))
                    .build();
        }, memberId, limit, offset);
    }
}
