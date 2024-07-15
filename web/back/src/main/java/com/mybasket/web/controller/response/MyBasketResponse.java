package com.mybasket.web.controller.response;

import java.util.Date;

import com.mybasket.web.entity.Basket;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MyBasketResponse {
    private final Long id;
    private final Date basketTime;
    private final Long budget;
    private final Long numProducts;
    private final Long numRecipes;
    private final Long totalPrice;

    public static MyBasketResponse fromBasket(Basket basket) {
        return MyBasketResponse.builder()
                .id(basket.getId())
                .basketTime(basket.getBasketTime())
                .budget(basket.getBudget())
                .numProducts(basket.getTotalAmount())
                .numRecipes(basket.getRecipeCount())
                .totalPrice(basket.getTotalAmount())
                .build();
    }
}
