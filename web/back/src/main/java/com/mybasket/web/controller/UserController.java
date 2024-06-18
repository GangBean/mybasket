package com.mybasket.web.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/auth")
public class UserController {

        @Value("${auth.google.client.id}")
        private String clientId;

        @Value("${auth.google.client.redirectUri}")
        private String redirectUri;

        @GetMapping("/member")
        public ResponseEntity<String> signUp() {
            System.out.println("SignUp");
            String googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth"
                + "?client_id=" + clientId
                + "&redirect_uri=" + redirectUri
                + "&response_type=code" 
                + "&scope=profile%20email"
                + "&access_type=offline";

            return new ResponseEntity(googleAuthUrl, HttpStatus.TEMPORARY_REDIRECT);
        }

        @GetMapping("/")
        public String hello() {
            System.out.println("hello");
            return "hello";
        }

}
