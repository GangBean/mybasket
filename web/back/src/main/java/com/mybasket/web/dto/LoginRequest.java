package com.mybasket.web.dto;

import com.mybasket.web.entity.Member;

import lombok.Builder;

@Builder
public class LoginRequest {
    private final String email;
    private final String name;

    private LoginRequest(String email, String name) {
        this.email = valid(email);
        this.name = name;
    }

    public String email() {
        return this.email;
    }

    public String name() {
        return this.name;
    }

    private String valid(String email) {
        return email;
    }

    public Member asMember() {
        return Member.builder()
                .email(this.email)
                .name(this.name)
                .build();
    }
}