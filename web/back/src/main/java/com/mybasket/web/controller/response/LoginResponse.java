package com.mybasket.web.controller.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponse {
    private final String email;
    private final String name;
}