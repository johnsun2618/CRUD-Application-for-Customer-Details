package com.example.Basic_Customer_Application.Controller;

import com.example.Basic_Customer_Application.Entity.Customer;
import com.example.Basic_Customer_Application.Repository.CustomerRepository;
import com.example.Basic_Customer_Application.Service.Implementation.CustomerServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping(path = "customerApi")
//http://localhost:8080/customerApi

@CrossOrigin(origins = "http://localhost:5500")
public class CustomerController {

    @Autowired
    CustomerServiceImplementation customerServiceImplementation;

    @Autowired
    CustomerRepository customerRepository;

//    Create customer Details
//    http://localhost:8080/customerApi/create
    @PostMapping(path = "/create")
    public String createCustomer(@RequestBody Customer customer)
    {
        return customerServiceImplementation.createCustomer(customer);
    }

//   Update customer
//    http://localhost:8080/customerApi/update
    @PutMapping("/update")
    public String updateCustomer(@RequestBody Customer customer)
    {
        return customerServiceImplementation.updateCustomer(customer);
    }

//    fetch All customer
//    http://localhost:8080/customerApi/fetch
    @GetMapping(path = "/fetch")
    public List<Customer> getListCustomer()
    {
        return customerServiceImplementation.getListCustomer();
    }


//    http://localhost:8080/customerApi/fetch/1 or 2 or 3 etc
    @GetMapping(path = "/fetch/{customerId}")
    public Customer getSingleCustomerBasedOnId(@PathVariable int customerId)
    {
        return customerServiceImplementation.getSingleCustomerBasedId(customerId);
    }

//    Search By First name
//    http://localhost:8080/customerApi/fetchByFirstName?firstName=Sourav
    @GetMapping(path = "/fetchByFirstName")
    public ResponseEntity<List<Customer>> findByFirstName(@RequestParam String firstName)
    {
        return new ResponseEntity<List<Customer>>(customerRepository.findByFirstName(firstName), HttpStatus.OK);
    }

    //Search By City
//    http://localhost:8080/customerApi/fetchByCity?city=Cuttack
    @GetMapping(path = "/fetchByCity")
    public ResponseEntity<List<Customer>> fetchCustomerByCity(@RequestParam String city)
    {
        return new ResponseEntity<List<Customer>>(customerRepository.findByCity(city), HttpStatus.OK);
    }

//    Search by Email
//    http://localhost:8080/customerApi/fetchByEmail?email=rout@gmail.com
    @GetMapping(path = "/fetchByEmail")
    public ResponseEntity<List<Customer>> fetchCustomerByEmail(@RequestParam String email)
    {
        return new ResponseEntity<List<Customer>>(customerRepository.findByEmail(email), HttpStatus.OK);
    }

//    Search by Phone
//    http://localhost:8080/customerApi/fetchByPhone?phone=123456789
    @GetMapping(path = "/fetchByPhone")
    public ResponseEntity<List<Customer>> findCustomerByPhone(@RequestParam String phone)
    {
        return new ResponseEntity<List<Customer>>(customerRepository.findByPhone(phone), HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{customerId}")
    public String deleteCustomer(@PathVariable int customerId)
    {
        return customerServiceImplementation.deleteCustomer(customerId);
    }


//    if you want to find how many user has logged in
    @GetMapping("/current-user")
    public String getLoggedInUser(Principal principal)
    {
        return principal.getName();
    }



}
