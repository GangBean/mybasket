package com.mybasket.web.entity;


import java.sql.Date;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Basket {
    private Long id;
    private Long memberId;
    private Date basketTime;
    private Long budget;
    private Long totalAmount;
    private Long recipeCount;
    private Long ingredientCount;
}
