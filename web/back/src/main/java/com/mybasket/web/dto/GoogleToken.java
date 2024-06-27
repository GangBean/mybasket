package com.mybasket.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleToken {

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("refresh_token")
    private String refreshToken;

    public String accessToken() {
        return this.accessToken;
    }

    public String refreshToken() {
        return this.refreshToken;
    }

    @Override
    public String toString() {
        return "GoogleToken [accessToken=" + accessToken + ", refreshToken=" + refreshToken + "]";
    }
    
}
