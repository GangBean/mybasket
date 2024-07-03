package com.mybasket.web.util;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClient;

import com.mybasket.web.dto.GoogleToken;
import com.mybasket.web.dto.GoogleUserInfo;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class GoogleApiUtil {
    private static final String GOOGLE_TOKEN_REQUEST_URI = "https://oauth2.googleapis.com/token";
    private static final String GOOGLE_USERINFO_REQUEST_URI = "https://www.googleapis.com/oauth2/v2/userinfo";

    @Value("${auth.google.client.id}")
    private String clientId;

    @Value("${auth.google.client.secret}")
    private String clientSecret;

    @Value("${auth.google.client.redirectUri}")
    private String redirectUri;

    private final RestClient restClient;

    public GoogleToken requestGoogleToken(String code) {
        MultiValueMap<String, String> request = new LinkedMultiValueMap<>();
        request.add("code", code);
        request.add("client_id", clientId);
        request.add("client_secret", clientSecret);
        request.add("redirect_uri", redirectUri);
        request.add("grant_type", "authorization_code");

        return Optional.ofNullable(restClient.post()
                .uri(GOOGLE_TOKEN_REQUEST_URI)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(request)
                .retrieve()
                .toEntity(GoogleToken.class)
                .getBody())
                .orElseThrow(() -> new RuntimeException("[Error] Google token request failed..."));
    }

    public GoogleUserInfo requestGoogleUserInfo(String accessToken) {
        return Optional.ofNullable(restClient.get()
                .uri(GOOGLE_USERINFO_REQUEST_URI)
                .headers(header -> header.setBearerAuth(accessToken))
                .retrieve()
                .toEntity(GoogleUserInfo.class)
                .getBody())
                .orElseThrow(() -> new RuntimeException("[Error] Google user-info request failed..."));
    }
}
