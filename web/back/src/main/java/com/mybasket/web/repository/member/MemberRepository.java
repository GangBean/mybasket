package com.mybasket.web.repository.member;

import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.mybasket.web.entity.Member;

@Repository
public class MemberRepository {

    private static final int VALID_MEMBER_INSERT_COUNT = 1;
    private final JdbcTemplate jdbcTemplate;

    public MemberRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public Optional<Member> findByEmail(String email) {
        String sql = "SELECT id, email, name FROM member WHERE email = ?";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            return Member.builder()
                    .id(rs.getLong("id"))
                    .email(rs.getString("email"))
                    .name(rs.getString("name"))
                    .build();
        }, email).stream().findAny();
    }

    public Member register(Member member) {
        String sql = "INSERT INTO member(email, name) VALUES (?, ?)";
        int insertCount = jdbcTemplate.update(sql, member.email(), member.name());
        if (insertCount != VALID_MEMBER_INSERT_COUNT) {
            throw new RuntimeException(String.format("[Error] inserted member count = %d", insertCount));
        }
        return member;
    }

    public void login(Member member) {
        return;
    }
}