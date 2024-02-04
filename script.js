// Global variables
let token; // JWT token for authentication
let customers; // Array of customers
let apiUrl = "http://localhost:8080/auth/login"; // Backend API URL

// https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp  
let remoteUrl = "https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp"; // Remote API URL

// https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp 
let authUrl = "https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp"; // Remote authentication URL

// DOM elements
let loginScreen = document.getElementById("login-screen");
let loginForm = document.getElementById("login-form");
let loginId = document.getElementById("login-id");
let password = document.getElementById("password");
let customerListScreen = document.getElementById("customer-list-screen");
let customerTableBody = document.getElementById("customer-table-body");
let addButton = document.getElementById("add-button");
let syncButton = document.getElementById("sync-button");
let addCustomerScreen = document.getElementById("add-customer-screen");
let addCustomerForm = document.getElementById("add-customer-form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let street = document.getElementById("street");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

// Login function
function login() {
    // Get the login credentials from the form
    let loginCredentials = {
        login_id: loginId.value,
        password: password.value
    };

    // Send a POST request to the remote authentication API
    fetch(authUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        })
        .then(response => response.json())
        .then(data => {
            // Check if the response contains a token
            if (data.token) {
                // Store the token in the global variable
                token = data.token;

                // Hide the login screen and show the customer list screen
                loginScreen.classList.add("hide");
                customerListScreen.classList.remove("hide");

                // Fetch the customers from the backend API
                fetchCustomers();
            } else {
                // Display an error message
                alert("Invalid login credentials");
            }
        })
        .catch(error => {
            // Display an error message
            alert("Something went wrong: " + error);
        });
}

// Login function
function login() {
    // Get the login credentials from the form
    let loginCredentials = {
        login_id: loginId.value,
        password: password.value
    };

    // Send a POST request to the remote authentication API
    fetch(authUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check if the response contains a token
            if (data.token) {
                // Store the token in the global variable
                token = data.token;

                // Hide the login screen and show the customer list screen
                loginScreen.classList.add("hide");
                customerListScreen.classList.remove("hide");

                // Fetch the customers from the backend API
                fetchCustomers();
            } else {
                // Display an error message
                alert("Invalid login credentials");
            }
        })
        .catch(error => {
            // Display a more informative error message
            alert(`Login failed. ${error.message}`);
        });
}


// Display customers function
function displayCustomers() {
    // Clear the table body
    customerTableBody.innerHTML = "";

    // Loop through the customers array
    for (let customer of customers) {
        // Create a table row element
        let tr = document.createElement("tr");

        // Create table data elements for each customer property
        let tdFirstName = document.createElement("td");
        tdFirstName.textContent = customer.firstName;
        tr.appendChild(tdFirstName);

        let tdLastName = document.createElement("td");
        tdLastName.textContent = customer.lastName;
        tr.appendChild(tdLastName);

        let tdStreet = document.createElement("td");
        tdStreet.textContent = customer.street;
        tr.appendChild(tdStreet);

        let tdAddress = document.createElement("td");
        tdAddress.textContent = customer.address;
        tr.appendChild(tdAddress);

        let tdCity = document.createElement("td");
        tdCity.textContent = customer.city;
        tr.appendChild(tdCity);

        let tdState = document.createElement("td");
        tdState.textContent = customer.state;
        tr.appendChild(tdState);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = customer.email;
        tr.appendChild(tdEmail);

        let tdPhone = document.createElement("td");
        tdPhone.textContent = customer.phone;
        tr.appendChild(tdPhone);

        // Create table data element for the actions
        let tdActions = document.createElement("td");

        // Create edit and delete buttons
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editCustomer(customer.id);
        };
        tdActions.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteCustomer(customer.id);
        };
        tdActions.appendChild(deleteButton);

        // Append the actions to the table row
        tr.appendChild(tdActions);

        // Append the table row to the table body
        customerTableBody.appendChild(tr);
    }
}

// Show add customer screen function
function showAddCustomerScreen() {
    // Hide the customer list screen and show the add customer screen
    customerListScreen.classList.add("hide");
    addCustomerScreen.classList.remove("hide");

    // Clear the add customer form
    addCustomerForm.reset();
}

// Add customer function
function addCustomer() {
    // Get the customer data from the form
    let customer = {
        firstName: firstName.value,
        lastName: lastName.value,
        street: street.value,
        address: address.value,
        city: city.value,
        state: state.value,
        email: email.value,
        phone: phone.value
    };

    // Send a POST request to the backend API
    fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => {
            // Add the customer to the customers array
            customers.push(data);

            // Display the customers in the table
            displayCustomers();

            // Hide the add customer screen and show the customer list screen
            addCustomerScreen.classList.add("hide");
            customerListScreen.classList.remove("hide");
        })
        .catch(error => {
            // Display an error message
            alert("Something went wrong: " + error);
        });
}

// Edit customer function
function editCustomer(id) {
    // Find the customer by id
    let customer = customers.find(c => c.id === id);

    // Populate the add customer form with the customer data
    firstName.value = customer.firstName;
    lastName.value = customer.lastName;
    street.value = customer.street;
    address.value = customer.address;
    city.value = customer.city;
    state.value = customer.state;
    email.value = customer.email;
    phone.value = customer.phone;

    // Change the add customer form submit function to update customer
    addCustomerForm.onsubmit = function(event) {
        event.preventDefault();
        updateCustomer(id);
    };

    // Hide the customer list screen and show the add customer screen
    customerListScreen.classList.add("hide");
    addCustomerScreen.classList.remove("hide");
}

// Update customer function
function updateCustomer(id) {
    // Get the customer data from the form
    let customer = {
        id: id,
        firstName: firstName.value,
        lastName: lastName.value,
        street: street.value,
        address: address.value,
        city: city.value,
        state: state.value,
        email: email.value,
        phone: phone.value
    };

    // Send a PUT request to the backend API
    fetch(apiUrl + "http://localhost:8080/customerApi/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => {
            // Update the customer in the customers array
            let index = customers.findIndex(c => c.id === id);
            customers[index] = data;

            // Display the customers in the table
            displayCustomers();

            // Hide the add customer screen and show the customer list screen
            addCustomerScreen.classList.add("hide");
            customerListScreen.classList.remove("hide");
        })
        .catch(error => {
            // Display an error message
            alert("Something went wrong: " + error);
        });
}

// Delete customer function
function deleteCustomer(id) {
    // Confirm the deletion
    if (confirm("Are you sure you want to delete this customer?")) {
        // Send a DELETE request to the backend API
        fetch(apiUrl + "http://localhost:8080/customerApi/delete" + id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            .then(response => {
                // Remove the customer from the customers array
                let index = customers.findIndex(c => c.id === id);
                customers.splice(index, 1);

                // Display the customers in the table
                displayCustomers();
            })
            .catch(error => {
                // Display an error message
                alert("Something went wrong: " + error);
            });
    }
}

// Sync customers function
function syncCustomers() {
    // Send a GET request to the remote API
    fetch(remoteUrl + "?cmd=get_customer_list", {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        .then(response => response.json())
        .then(data => {
            // Loop through the remote customers array
            for (let remoteCustomer of data) {
                // Find the local customer by uuid
                let localCustomer = customers.find(c => c.uuid === remoteCustomer.uuid);

                // If the local customer exists, update it
                if (localCustomer) {
                    updateCustomer(localCustomer.id);
                } else {
                    // If the local customer does not exist, create it
                    createCustomer(remoteCustomer);
                }
            }
        })
        .catch(error => {
            // Display an error message
            alert("Something went wrong: " + error);
        });
}

// Create customer function
function createCustomer(customer) {
    // Send a POST request to the backend API
    fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => {
            // Add the customer to the customers array
            customers.push(data);

            // Display the customers in the table
            displayCustomers();
        })
        .catch(error => {
            // Display an error message
            alert("Something went wrong: " + error);
        });
}

// Show customer list screen function
function showCustomerListScreen() {
    // Hide the add customer screen and show the customer list screen
    addCustomerScreen.classList.add("hide");
    customerListScreen.classList.remove("hide");

    // Change the add customer form submit function to add customer
    addCustomerForm.onsubmit = function(event) {
        event.preventDefault();
        addCustomer();
    };
}