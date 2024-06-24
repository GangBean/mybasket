package com.mybasket.web.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.HttpEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.Map;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/auth")
public class UserController {

        @Value("${auth.google.client.id}")
        private String clientId;

        @Value("${auth.google.client.secret}")
        private String clientSecret;

        @Value("${auth.google.client.redirectUri}")
        private String redirectUri;
        
	@GetMapping("/")
        public ResponseEntity<String> redirct_google_consent() {
            System.out.println("SignUp");
            String googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth"
                + "?client_id=" + clientId
                + "&redirect_uri=" + redirectUri
                + "&response_type=code" 
                + "&scope=profile%20email"
                + "&access_type=offline";

            return ResponseEntity
		    .status(HttpStatus.FOUND)
		    .header("Location", googleAuthUrl)
		    .build();
        }

        @GetMapping("/members")
        public ResponseEntity<Map> login(@RequestParam("code") String code) {
            RestClient client = RestClient.create();            
            
            MultiValueMap<String, String> request = new LinkedMultiValueMap<>();
            request.add("code", code); 
            request.add("client_id", clientId);
            request.add("client_secret",clientSecret);
            request.add("redirect_uri", redirectUri);
            request.add("grant_type", "authorization_code");

            ResponseEntity<Map> response = client.post()
		    .uri("https://oauth2.googleapis.com/token")
		    .contentType(MediaType.APPLICATION_FORM_URLENCODED)
		    .body(request)
		    .retrieve()
		    .toEntity(Map.class);
	    String accessToken = (String) response.getBody().get("access_token");
            
            // request to get userinfo
            String userInfoUrl = "https://www.googleapis.com/oauth2/v2/userinfo";
            response = client.get()
		    .uri(userInfoUrl)
		    .headers(header -> header.setBearerAuth(accessToken))
		    .retrieve()
		    .toEntity(Map.class);
	    Map userInfo = (Map) response.getBody();

	    // String email = userInfo.get("email");
            // enroll app member and login
            // memberService.signupAndLogin(email);

	    return response;
        }

        @GetMapping("/hello")
        public String hello() {
            System.out.println("hello");
            return "hello";
        }

}
