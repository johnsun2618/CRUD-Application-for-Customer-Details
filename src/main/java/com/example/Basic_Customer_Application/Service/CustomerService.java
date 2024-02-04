package com.example.Basic_Customer_Application.Service;

import com.example.Basic_Customer_Application.Entity.Customer;
import com.example.Basic_Customer_Application.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CustomerService {

    String createCustomer(Customer customer);

    String updateCustomer(Customer customer);

    List<Customer> getListCustomer();

    Customer getSingleCustomerBasedId(int customerId);

    String deleteCustomer(int customerId);

}
