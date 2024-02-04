package com.example.Basic_Customer_Application.Entity;

import jakarta.persistence.Entity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class JwtResponse {

    private String jwtToken;

    private String username;

}
