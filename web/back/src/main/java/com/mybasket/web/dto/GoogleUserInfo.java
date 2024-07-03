package com.mybasket.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleUserInfo {
    @JsonProperty("email")
    private String email;

    @JsonProperty("name")
    private String name;

    public String email() {
        return this.email;
    }

    public String name() {
        return this.name;
    }

    @Override
    public String toString() {
        return "GoogleUserInfo [email=" + email + ", name=" + name + "]";
    }

    
}
