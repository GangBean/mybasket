package com.mybasket.web.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.mybasket.web.controller.response.MyBasketResponse;
import com.mybasket.web.repository.BasketRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BasketService {
    private final BasketRepository basketRepository;

    public List<MyBasketResponse> myBaskets(Long memberId, int offset, int limit) {
        return basketRepository.findBasketsByMemberId(memberId, offset, limit)
                .stream()
                .map(MyBasketResponse::fromBasket)
                .collect(Collectors.toList());
    }
}
