package com.mybasket.web.controller;

import com.mybasket.web.controller.response.LoginResponse;
import com.mybasket.web.dto.GoogleToken;
import com.mybasket.web.dto.GoogleUserInfo;
import com.mybasket.web.dto.LoginRequest;
import com.mybasket.web.service.MemberService;
import com.mybasket.web.util.GoogleApiUtil;
import com.mybasket.web.util.TokenCookieUtil;

import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost", "http://localhost:3000"}, maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/auth")
public class MemberController {
	// private static final String GOOGLE_TOKEN_REQUEST_URI = "https://oauth2.googleapis.com/token";
	// private static final String GOOGLE_USERINFO_REQUEST_URI = "https://www.googleapis.com/oauth2/v2/userinfo";
	private static final String APP_HOME = "http://localhost";

	// @Value("${auth.google.client.id}")
	// private String clientId;

	// @Value("${auth.google.client.secret}")
	// private String clientSecret;

	// @Value("${auth.google.client.redirectUri}")
	// private String redirectUri;

	@Value("${spring.profiles.active}")
	private String profile;

	private final MemberService memberService;
	private final GoogleApiUtil googleApiUtil;

	@GetMapping("/members")
	public ResponseEntity<LoginResponse> googleLoginCallback(
		@RequestParam("code") String code) {
		// RestClient client = RestClient.create();

		// MultiValueMap<String, String> request = new LinkedMultiValueMap<>();
		// request.add("code", code);
		// request.add("client_id", clientId);
		// request.add("client_secret", clientSecret);
		// request.add("redirect_uri", redirectUri);
		// request.add("grant_type", "authorization_code");

		// GoogleToken googleToken = Optional.ofNullable(client.post()
		// 		.uri(GOOGLE_TOKEN_REQUEST_URI)
		// 		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
		// 		.body(request)
		// 		.retrieve()
		// 		.toEntity(GoogleToken.class)
		// 		.getBody())
		// 		.orElseThrow(() -> new RuntimeException("[Error] Google token request failed..."));

		GoogleToken googleToken = googleApiUtil.requestGoogleToken(code);
		// request to get userinfo
		// GoogleUserInfo googleUserInfo = Optional.ofNullable(client.get()
		// 		.uri(GOOGLE_USERINFO_REQUEST_URI)
		// 		.headers(header -> header.setBearerAuth(googleToken.accessToken()))
		// 		.retrieve()
		// 		.toEntity(GoogleUserInfo.class)
		// 		.getBody())
		// 		.orElseThrow(() -> new RuntimeException("[Error] Google user-info request failed..."));

		GoogleUserInfo googleUserInfo = googleApiUtil.requestGoogleUserInfo(googleToken.accessToken());

		// enroll app member and login
		LoginResponse loginResponse = memberService.signupAndLogin(LoginRequest.builder()
				.email(googleUserInfo.email())
				.name(googleUserInfo.name())
				.build());

		return ResponseEntity
				.status(HttpStatus.FOUND)
				.contentType(MediaType.APPLICATION_JSON)
				.headers(tokenCookies(googleToken.accessToken(), googleToken.refreshToken()))
				.body(loginResponse);
	}

	@GetMapping("/sessions")
	public ResponseEntity<Map<String, Boolean>> isLoggedin(
			@CookieValue(value = "accessToken", required = false) String accessToken) {
		Map<String, Boolean> login = new HashMap<>();
		login.put("loggedIn", (accessToken != null && !accessToken.isEmpty()));
		return ResponseEntity.ok()
				.body(login);
	}

	private HttpHeaders tokenCookies(String accessToken, String refreshToken) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Set-Cookie", TokenCookieUtil.cookie("accessToken", accessToken, profile));
		headers.add("Set-Cookie", TokenCookieUtil.cookie("refreshToken", refreshToken, profile));
		headers.add("location", APP_HOME);
		return headers;
	}
}
