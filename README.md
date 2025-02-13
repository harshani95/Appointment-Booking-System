# Appointment Booking System

### Project Setup and Installation
Follow these steps to set up and run the project locally:

### Prerequisites
Ensure you have the following installed on your system:
- Java Development Kit (JDK) 11 or later
- Node.js and npm (Node Package Manager)
- MySQL Server
- Spring Boot
- Git

### Clone the Repository
`git clone https://github.com/harsani95/Appointment-Booking-System.git`<br>
`cd booking-system`

### Backend Setup (Spring Boot)
1. Navigate to the backend directory.<br>
 `cd backend`
2. Configure MySQL database settings in application.properties file located in src/main/resources.
      `spring.datasource.url=jdbc:mysql://localhost:3306/db_name`<br>
     `spring.datasource.username=db_username`<br>
     `spring.datasource.password=db_password `
3. Run the Spring Boot application.
4. The backend server will start at `http://localhost:8081`

### Frontend Setup (React)
1. Navigate to the frontend directory
   `cd frontend`
2. Install dependencies.`npm install`
3. Start the Vite development server.`npm run dev`
4. The React app will start at `http://localhost:5173`

#### The application should now be running at http://localhost:5173 (React) and http://localhost:8081 (Spring Boot API).<br>
### Features
- User authentication and role-based access (Admin, User)
- Appointment scheduling with real-time availability
- Notifications
- Dashboard for managing appointments
- Responsive UI built with React and Material UI

## Technologies and Tools
### Frontend:
- React JS 
- Tailiwind CSS
- Axios (for API requests)

### Backend:
- Java 19
- Spring Boot
- Spring Security (for authentication)
- MySQL
  
