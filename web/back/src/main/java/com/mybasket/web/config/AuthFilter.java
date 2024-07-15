package com.mybasket.web.config;

import java.io.IOException;
import java.util.Map;

import org.springframework.util.AntPathMatcher;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthFilter implements Filter {
    private static final String MEMBER_ID_PATTERN = "/api/members/{memberId}/**";
    private final AntPathMatcher matcher = new AntPathMatcher();
    
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
    throws IOException, ServletException {
        if (request instanceof HttpServletRequest && response instanceof HttpServletResponse){
            HttpServletRequest httpRequest = (HttpServletRequest) request;
            String path = httpRequest.getRequestURI();
            
            Map<String, String> map = matcher.extractUriTemplateVariables(MEMBER_ID_PATTERN, path);
            String pathMemberId = map.get("memberId");
            Long sessionId = (Long) request.getAttribute("memberId");
            
            if (pathMemberId != null && !pathMemberId.equals(sessionId.toString())) {
                throw new RuntimeException(String.format("접근할 수 없는 리소스입니다: %s != %s", sessionId, pathMemberId));
            }
        }
        chain.doFilter(request, response);
    }
}
