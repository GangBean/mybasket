package com.mybasket.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mybasket.web.controller.response.MyBasketResponse;
import com.mybasket.web.service.BasketService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = { "http://localhost", "http://localhost:3000" }, maxAge = 3600, allowCredentials = "true")
@RequestMapping("/api/members")
public class BasketController {

    private final BasketService basketService;

    @GetMapping("/{memberId}/baskets")
    public ResponseEntity<List<MyBasketResponse>> getNextMyBaskets(@PathVariable("memberId") Long memberId,
            @RequestParam("offset") int offset, @RequestParam("limit") int limit) {
        return ResponseEntity.ok(basketService.myBaskets(memberId, offset, limit));
    }
}
