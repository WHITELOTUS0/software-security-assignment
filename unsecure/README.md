# Unsecure App

This is a demonstration application to illustrate common web security vulnerabilities, specifically SQL Injection and CSRF (Cross-Site Request Forgery). It is built using Node.js, Express, and MySQL. This application is intended for educational purposes only and should not be deployed in a production environment.

## Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A minimal and flexible Node.js web application framework.
- MySQL: An open-source relational database management system.
- Bootstrap: An open-source CSS framework directed at responsive, mobile-first front-end web development.
- Bootstrap Icons: A free, high-quality, open-source icon library with over 1,300 icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm
- MySQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/WHITELOTUS0/software-security-assignment
   ```

2. Navigate to the unsecure directory:
    ```sh
    software-security-assignment/unsecure
    ```

3. Install required packages using npm:
    ```sh
    npm install
    ```

4. Create a .env file in the root of the unsecure directory with the following content, replacing the values with your MySQL configuration:
   ```
   HOST=localhost
   DB_USER=your_user
   DB_PORT=3306
   DB_PASSWORD=your_password
   DATABASE=your_database
   ```

### Running the Application

5. Start the server:
   ```sh
   npm start
   ```

6. Open your web browser and navigate to http://localhost:3000 to view the application.  

### License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information

### Security Disclaimer
This application contains intentional security vulnerabilities for demonstration purposes. Do not use this code in production or expose it to the internet.