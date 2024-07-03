package com.mybasket.web.config;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

import com.mybasket.web.service.MemberService;
import com.mybasket.web.util.GoogleApiUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
public class CookieFilterConfig {
    private final BeanFactory beanFactory;

    @Bean
    public FilterRegistrationBean<CookieFilter> cookieFilterRegistration() {
        FilterRegistrationBean<CookieFilter> registrationBean = new FilterRegistrationBean<>();

        registrationBean.setFilter(new CookieFilter(
            beanFactory.getBean("googleApiUtil", GoogleApiUtil.class),
            beanFactory.getBean("memberService", MemberService.class)));
        registrationBean.addUrlPatterns("/api/recommendations/*");

        return registrationBean;
    }

    @Bean
    public RestClient restClient() {
        return RestClient.create();
    }
}
