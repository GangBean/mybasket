package com.mybasket.web.entity;

import lombok.Builder;

@Builder
public class Member {
    private Long id;
    private String email;
    private String name;
    
    public Member(Long id, String email, String name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }

    public Long id() {
        return this.id;
    }

    public String email() {
        return this.email;
    }

    public String name() {
        return this.name;
    }
}