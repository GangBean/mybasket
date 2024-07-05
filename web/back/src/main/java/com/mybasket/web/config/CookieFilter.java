package com.mybasket.web.config;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.mybasket.web.dto.GoogleUserInfo;
import com.mybasket.web.service.MemberService;
import com.mybasket.web.util.GoogleApiUtil;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CookieFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(CookieFilter.class);

    private final GoogleApiUtil googleApiUtil;
    private final MemberService memberService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        if (request instanceof HttpServletRequest && response instanceof HttpServletResponse) {
            HttpServletRequest httpServletRequest = (HttpServletRequest) request;

            Cookie[] cookies = httpServletRequest.getCookies();
            if (cookies == null) {
                logger.debug("[CookieFilter] There is no cookie value");
                chain.doFilter(request, response);
                return;
            }

            String accessToken = null;
            String refreshToken = null;
            for (Cookie cookie : cookies) {
                logger.info(String.format("[CookieFileter] Cookie -> %s : %s", cookie.getName(), cookie.getValue()));
                if (cookie.getName().equals("accessToken")) {
                    accessToken = cookie.getValue();
                    continue;
                }
                if (cookie.getName().equals("refreshToken")) {
                    refreshToken = cookie.getValue();
                    continue;
                }
            }
            if (accessToken == null) {
                throw new RuntimeException("[CookieFilter] There is no access token value in header.");
            }
            GoogleUserInfo googleUserInfo = googleApiUtil.requestGoogleUserInfo(accessToken);
            // logger.info(googleUserInfo.toString());
            Long memberId = memberService.findMemberIdByEmail(googleUserInfo.email());
            // logger.info("[filter] memberId = " + memberId);
            request.setAttribute("userInfo", googleUserInfo);
            request.setAttribute("memberId", memberId);
        }
        chain.doFilter(request, response);
    }
}
