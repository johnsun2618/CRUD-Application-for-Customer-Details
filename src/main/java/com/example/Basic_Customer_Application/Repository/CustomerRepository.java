package com.example.Basic_Customer_Application.Repository;

import com.example.Basic_Customer_Application.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    List<Customer> findByCity(String city);

    List<Customer> findByEmail(String email);

    List<Customer> findByPhone(String phone);

    List<Customer> findByFirstName(String firstName);
}
