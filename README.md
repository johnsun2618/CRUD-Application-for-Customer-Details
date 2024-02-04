                                         CUSTOMER DETAILS CRUD APPLICATION


This repository contains a CRUD (Create, Read, Update, Delete) application for managing customer details. The application is built with a robust and secure technology stack for both the backend and frontend.



                                                      Backend:
The backend of this application is powered by Spring Boot, a powerful and convention-over-configuration framework for building Java-based, production-grade applications. It provides a seamless and efficient development experience.

                                                     Database:
The application utilizes MySQL for data storage. Ensure that you have MySQL installed and running. Configure the database connection in the application.properties file:
spring.datasource.url=jdbc:mysql://localhost:3306/customerdb?createTableIfNotExists=true
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
![Screenshot 2024-02-04 121749](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/f9eb3f3d-678d-42f2-9859-2e158f3e946e)




                                                  Authentication:
For securing the API, the application implements authentication using JWT (JSON Web Token). JWTs are utilized to generate tokens, ensuring a secure and reliable authentication mechanism for the users.
1. Log In: Navigate to the login page in the frontend and enter your credentials (username and password).

Endpoint: /login
Method: POST
Authenticate Token: Upon successful login, an authentication token will be generated. Store this token securely.
   ![Screenshot 2024-02-03 230330](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/0c0fe0f8-362d-43c1-843e-40285297290e)


2. Authenticate Token: Use the generated token to authenticate and secure your API requests. Include the token in the headers of your requests for authorization.
![Screenshot 2024-02-03 230512](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/9d13c830-ea23-4e0b-a88b-4df3aea1f5c7)

3. If, for any reason, you enter the wrong credentials, the authentication will fail.

Handling Incorrect Credentials:

You will receive a response indicating the authentication failure.
Double-check your entered credentials for accuracy.
If the issue persists, contact the system administrator for assistance.
Handling Token Issues:

If you forget to add the "Bearer" prefix or encounter token-related issues, check and correct the token format.
 ![Screenshot 2024-02-03 231549](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/c1836849-e615-4806-86c9-a6337f252cc1)

                                                 CRUD Operations:

   Fetching by ID:
To retrieve customer details by ID, make a GET request to the following endpoint: Replace {id} with the specific customer ID you want to retrieve.
![Screenshot 2024-02-03 230613](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/4d912892-231f-49f0-aa5f-c4cfdb627744)

   Sorting:
You can sort the customer data based on various parameters. Include the sorting parameter in the query string of your GET request. For example, to sort by city:
Supported sorting parameters include city, firstName, email, etc.
![Screenshot 2024-02-03 230807](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/7001ea98-e75f-42b3-8808-3fb2f7190ecf)

Update the Customer: 
To update customer details, make a PUT request to the following endpoint:
Include the updated customer details in the request body. The application will handle the update operation without needing an explicit ID in the URL.
![Screenshot 2024-02-03 231136](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/7ba38247-a849-478e-9368-6920adc1dd7d)


Deleting by ID
To delete a customer by ID, make a DELETE request to the following endpoint:
Replace {id} with the specific customer ID you want to delete.
![Screenshot 2024-02-03 231232](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/43f745df-5e30-41dc-9425-9ccd1814df94)







                                                     Frontend:
The frontend of the application is developed using fundamental web technologies:

HTML: Provides the structure and markup for the web pages.
CSS: Enhances the visual appeal and styling of the user interface.
JavaScript: Enables dynamic and interactive behavior on the client side.
This combination of technologies ensures a responsive and user-friendly interface for managing customer details.

Login Page
The login page is the gateway to access the application's features. Here's how you can interact with it:

Access the Login Page: Open your preferred web browser and navigate to the login page URL.

URL: /login
Method: GET
Enter Credentials: Input your username and password in the provided fields.

Submit: Click the login button to submit your credentials.

After successful login, you'll receive an authentication token that should be used for subsequent API requests.
![Screenshot 2024-02-03 231746](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/e52f1145-0f5e-4c86-99c9-09b54c98e75e)

Handling Incorrect Credentials:
If the credentials are incorrect, you will receive a response indicating the authentication failure.
Double-check your entered credentials for accuracy.
If the issue persists, contact the system administrator for assistance.
![Screenshot 2024-02-03 231818](https://github.com/johnsun2618/CRUD-Application-for-Customer-Details/assets/101565759/6605efa2-7be8-49e0-9b35-81cffdb0939e)


                                                   Sync Button
A new feature has been added to the application, enabling you to synchronize customer data with a remote API. To use this feature, follow these steps:

Access the Sync Button:

Open the customer list screen in your frontend.
Look for the newly added "Sync" button on the customer list screen.
Sync Customer Data:

Click the "Sync" button to initiate the synchronization process.
The application will call the remote API to fetch the latest customer list.
Update Database:

For each customer received from the remote API:
If the customer already exists in the local database, update the existing record.
If the customer is not present in the local database, insert a new record.









