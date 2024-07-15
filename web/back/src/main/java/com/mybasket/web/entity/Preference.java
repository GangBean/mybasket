package com.mybasket.web.entity;

public enum Preference {
    LIKE("like"), 
    DISLIKE("dislike");

    private final String value;

    Preference(String value) {
        this.value = value;
    }

    public static Preference of(String value) {
        if (value == null || value.isBlank()) {
            throw new RuntimeException("선호도는 빈 값일 수 없습니다: " + value);
        }
        return (value.toLowerCase()=="like") ? LIKE : DISLIKE;
    }
}
