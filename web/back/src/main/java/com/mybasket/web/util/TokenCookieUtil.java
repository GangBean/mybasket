package com.mybasket.web.util;

import org.springframework.stereotype.Component;

import com.mybasket.web.config.EnvironmentProfile;

@Component
public class TokenCookieUtil {
	private static final String SET_COOKIE_HEADER_PATH = "/api";
	private static final String SET_COOKIE_HEADER_DOMAIN = "web.mybasket.com";
	private static final int SET_COOKIE_HEADER_MAX_AGE = 3600;

	public static String cookie(String name, String value, String profile) {
		String cookie = String.format(
				"%s=%s; Max-Age=%d; Path=%s; HttpOnly",
				name,
				value,
				SET_COOKIE_HEADER_MAX_AGE,
				SET_COOKIE_HEADER_PATH);

		if (EnvironmentProfile.isProd(profile)) {
			cookie += String.format("; Domain=%s; Secure", SET_COOKIE_HEADER_DOMAIN);
		}
		return cookie;
	}

	public static String login_cookie() {
		return String.format("login=true; Max-Age=%d;",
				SET_COOKIE_HEADER_MAX_AGE);
	}
}
