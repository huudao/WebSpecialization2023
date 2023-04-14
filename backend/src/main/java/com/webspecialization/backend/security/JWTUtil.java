package com.webspecialization.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(String username) {
        return Jwts.builder().setSubject(username).setExpiration(new Date(System.currentTimeMillis() + expiration)).signWith(SignatureAlgorithm.HS512, secret.getBytes()).compact();

    }

    public String getToken(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader == null || authorizationHeader.isEmpty() || !authorizationHeader.startsWith("Bearer")){
            return null;
        }

        return authorizationHeader.split(" ")[1].trim();
    }

    public String getUsername(String token) {

        Claims claims = getClaims(token);

        if (claims != null) {
            return claims.getSubject();
        }
        return null;
    }

    public boolean isTokenValid(String token) {
        Claims claims = getClaims(token);

        if (claims != null) {
            String email = claims.getSubject();
            Date expirationDate = claims.getExpiration();
            Date now = new Date(System.currentTimeMillis());

            if (email != null && expirationDate != null && now.before(expirationDate)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private Claims getClaims(String token) {
        try {
            return Jwts.parser().setSigningKey(secret.getBytes()).parseClaimsJws(token).getBody();

        } catch (Exception e) {
            return null;
        }
    }
}
