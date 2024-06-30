package com.mybasket.web.config;

public enum EnvironmentProfile {
    PROD("prod"),
    DEV("dev");

    private String profile;

    EnvironmentProfile(String profile) {
        this.profile = profile;
    }

    public static boolean isProd(String profile) {
        return profile == PROD.profile;
    }
}