# Combine

Combine is a platform that matches people interested in software projects into random teams. This project makes it easier to find collaborators for software development, enabling people to connect and work together.

[Live Demo](https://combine-unlg.onrender.com)





  


  


  
## Usage

### Getting Started
To get started with Combine, sign up or log into your account. After logging in, select the area you want to participate in (backend, frontend, fullstack) and wait to be matched with a project. If you are matched with a project, you will receive an email with the project details.

### Architecture Overview
Combine is developed using both monolithic and microservices architectures, providing flexibility in deployment and scalability.

#### Monolithic Architecture
In the monolithic version, all application components are combined into a single codebase. This version is built using the MERN stack (MongoDB, Express.js, React, Node.js). All functionalities are provided by a single backend and frontend, and all data is stored in a single database.

#### Microservices Architecture
The microservices version of Combine divides the application into independent services, each responsible for a specific functionality. The tech stack includes Java, Spring Boot, React, MySQL, Docker, Kubernetes, and Kafka for asynchronous communication. Each microservice handles its own data and communicates with other services when necessary.

Microservices:
* Project Service: Manages project details, requirements, and deadlines.
* Matching Service: Matches users based on project roles.
* User Service: Manages user profiles, authentication, and access control.
* Tracking Service: Tracks project progress, task assignments, and milestones. (Note: This service is currently under development and will be added in future updates.)


In the microservices version, asynchronous communication is facilitated through Kafka, ensuring reliable and efficient message passing between services. Service discovery and routing are managed by Eureka Server and API Gateway, respectively, providing a seamless experience for users and developers alike.

 

## Contributions

Contributions are welcome! I'd love for you to contribute by forking the repository and submitting pull requests.

  
## Contact
For questions or feedback, please contact me at berkk.arsln@gmail.com


