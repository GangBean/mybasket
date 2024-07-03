package com.mybasket.web.entity;

import java.sql.Date;
import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberRecommendationRecipe {
    private Long id;
    private Long memberId;
    private Long recipeId;
    private Date recommendationDatetime;
    private Preference preference;
}
