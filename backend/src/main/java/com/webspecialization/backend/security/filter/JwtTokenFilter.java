package com.webspecialization.backend.security.filter;

import com.webspecialization.backend.model.User;
import com.webspecialization.backend.repository.UserRepository;
import com.webspecialization.backend.security.JWTUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtTokenFilter extends OncePerRequestFilter {
    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader == null || authorizationHeader.isEmpty() || !authorizationHeader.startsWith("Bearer")){
            filterChain.doFilter(request,response);
            return;
        }

        final String token = authorizationHeader.split(" ")[1].trim();

        if(!jwtUtil.isTokenValid(token)) {
            filterChain.doFilter(request,response);
            return;
        }

        String username = jwtUtil.getUsername(token);
        User uPass = userRepository.findUserByUsername(username);

        UsernamePasswordAuthenticationToken upassToken = new UsernamePasswordAuthenticationToken(username, null, uPass.getAuthorities());
        upassToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(upassToken);
        filterChain.doFilter(request, response);
    }
}
