package com.mybasket.web.service;

import com.mybasket.web.entity.Member;
import com.mybasket.web.controller.response.LoginResponse;
import com.mybasket.web.dto.LoginRequest;
import com.mybasket.web.repository.member.MemberRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberService {

	private final MemberRepository memberRepository;

	public MemberService(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}

	@Transactional
	public LoginResponse signupAndLogin(LoginRequest loginForm) {
		Member member = memberRepository.findByEmail(loginForm.email())
				.orElseGet(() -> memberRepository.register(loginForm.asMember()));

		memberRepository.login(member);

		return LoginResponse.builder()
				.email(member.email())
				.name(member.name())
				.build();
	}

	public Long findMemberIdByEmail(String email) {
		return memberRepository.findByEmail(email)
				.orElseThrow()
				.id();
	}
}
