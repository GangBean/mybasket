package com.mybasket.web.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mybasket.web.controller.response.MemberRecommendationRecipeResponse;
import com.mybasket.web.service.MemberRecommendationRecipeService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost", maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/recommendations")
public class MemberRecommendationController {
        private static final Logger logger = LoggerFactory.getLogger(MemberRecommendationController.class);
        private final MemberRecommendationRecipeService memberRecommendationRecipeService;

        @GetMapping("/histories")
        public ResponseEntity<List<MemberRecommendationRecipeResponse>> findMemberRecommendationHistories(
                        @RequestParam("offset") int offset,
                        @RequestParam("limit") int limit,
                        HttpServletRequest request) {
                // Long memberId = 1L;
                Long memberId = (Long) request.getAttribute("memberId");
                logger.info("memberId = " + memberId);

                List<MemberRecommendationRecipeResponse> recommendationHistories = memberRecommendationRecipeService
                                .recommendationHistories(memberId, offset, limit);
                return ResponseEntity
                                .ok(recommendationHistories);
        }
}
