package com.example.Basic_Customer_Application.Service.Implementation;

import com.example.Basic_Customer_Application.Entity.Customer;
import com.example.Basic_Customer_Application.Repository.CustomerRepository;
import com.example.Basic_Customer_Application.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImplementation implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public String createCustomer(Customer customer) {
        customerRepository.save(customer);
        return "Customer's Information Saved Successfully";
    }

    @Override
    public String updateCustomer(Customer customer) {
        customerRepository.save(customer);
        return "Customer's Information Update Successfully";
    }

    @Override
    public List<Customer> getListCustomer() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getSingleCustomerBasedId(int customerId) {
        return customerRepository.findById(customerId).get();
    }

    @Override
    public String deleteCustomer(int customerId) {

        customerRepository.deleteById(customerId);
        return "Customer with ID " + customerId + " has been Deleted";

    }


}
