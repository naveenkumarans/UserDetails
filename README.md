# User Details Application

Welcome to the User Details Application repository! This comprehensive User Details management system is built with Spring Boot for the backend, React for the frontend, and Mongo for database management. The system enables users to view and edit their profile, providing a centralized platform for effectively managing and tracking system events.

## System Architecture

The User management system employs a layered architecture, separating the backend and frontend components for enhanced maintainability and extensibility. The backend, powered by Spring Boot, handles data storage, retrieval, and logic, while the frontend, built with React, provides a user-friendly interface for interacting with the log data.

---

## Frontend (React)

### Overview

The frontend application utilizes React, a JavaScript library for building user interfaces, to deliver an interactive and intuitive experience for managing logs. It provides a comprehensive interface for viewing, adding, and updating data, ensuring effortless data management and organization.

### Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** Library for managing client-side routing.
- **Axios:** HTTP client library for making API calls.

### Getting Started

#### Prerequisites

- Node.js installed.
- npm package manager.

#### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/naveenkumarans/UserDetails/tree/master/FrontEnd
    cd UserDetails
    npm install
    ```

2. **Run Locally:**

    ```bash
    npm start
    ```

---

## Backend (Spring Boot)

### Overview

The backend application, built with Spring Boot, serves as the core of the log management system. It handles data storage, retrieval, and logic, ensuring the integrity and reliability of the log data. It provides a RESTful API for interacting with the log data, enabling seamless integration with the frontend application.

### Technologies Used

- **Spring Boot:** Framework for building Java-based enterprise applications.
- **Spring Data MongoDB:** Simplifies data access using Mongo and Spring.
- **MongoDB:** Database for storing log data.

### Getting Started

#### Prerequisites

- Java JDK installed.
- Maven build tool.
- Mongo database.

#### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/naveenkumarans/UserDetaiks/tree/master/Backend
    mvn clean install
    ```

2. **Configuration:**

    - Configure database details in `src/main/resources/application.properties` or use environment variables.
    - Create the necessary database tables using the provided SQL scripts.

3. **Run Locally:**

    ```bash
    java -jar target/log-app-backend.jar
    ```

---

# Images

## Image 1
![Image 1](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172011.png?alt=media&token=bfa367e1-e73a-4520-8c21-921772d3ff1a)

## Image 2
![Image 2](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172034.png?alt=media&token=1e7bc09d-f0ab-4471-b5da-1f6766127d62)

## Image 3
![Image 3](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172501.png?alt=media&token=497f6fb7-fca5-4c29-a639-4e88b9b68bd1)

## Image 4
![Image 4](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172237.png?alt=media&token=bf8cb7d8-9836-4ebc-adbb-9d940d029e55)

## Image 5
![Image 5](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172517.png?alt=media&token=df867993-2b0a-46e6-b8e7-455f17003eca)

## Image 6
![Image 6](https://firebasestorage.googleapis.com/v0/b/portfolioimages-fdfbd.appspot.com/o/UserDetailsApp%2FScreenshot%202023-11-23%20172531.png?alt=media&token=5b3b416a-d668-4bff-8400-f6fa30b64e2a)



## Contributing

If you'd like to contribute to the project, please follow the [Contribution Guidelines](CONTRIBUTING.md).



## License

This project is licensed under the [MIT License](LICENSE).
