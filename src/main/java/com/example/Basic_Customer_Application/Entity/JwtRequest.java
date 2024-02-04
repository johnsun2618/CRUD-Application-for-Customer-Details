package com.example.Basic_Customer_Application.Entity;

import jakarta.persistence.Entity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class JwtRequest {

    private String email;

    private String password;

}
