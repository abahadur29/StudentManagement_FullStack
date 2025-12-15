# Student Management System

This project is a full-stack assignment submission. It is a secure web application that allows users to register, log in, and manage student records.

## Project Overview

The application consists of a backend REST API built using ASP.NET Core and a frontend application built with Angular 21. Authentication and authorization are implemented using JWT (JSON Web Tokens) along with ASP.NET Core Identity.

Only authenticated users are allowed to access and perform CRUD operations on student data.

## Tech Stack

### Backend
- ASP.NET Core Web API (.NET 8)
- Microsoft SQL Server (LocalDB)
- Entity Framework Core
- ASP.NET Core Identity
- JWT Authentication

### Frontend
- Angular 21
- Standalone Components
- Angular HTTP Client

## Key Features

- User registration and login using JWT authentication
- Secure APIs with token-based authorization
- Controlled access to student management features after login
- Full CRUD operations on students:
  - Create new students
  - View student records
  - Update student details
  - Delete student records
- Clean and user-friendly interface

## How to Run

### Backend (ASP.NET Core API)

1. Open the StudentApi folder in Visual Studio 2022
2. Ensure the connection string in appsettings.json matches your local SQL Server instance
3. Open the Package Manager Console and run:
   Update-Database
4. Run the project
5. The API will start at:
   http://localhost:5289

### Frontend (Angular Application)

1. Open the student-client folder in VS Code
2. Install dependencies:
   npm install
3. Run the application:
   ng serve
4. Open your browser and navigate to:
   http://localhost:4200

## Usage

1. Register a new user account
2. Log in using the registered credentials
3. Access the student management dashboard
4. Add, edit, or delete student records

---

## Screenshots

Below are the screenshots demonstrating the complete flow of the application, from authentication to student management, along with the project structure.

### 1. Login Page
User login interface where existing users can enter their credentials.
![Login Page](screenshots/1.%20Login%20Page%20Design.png)

### 2. Login Error – Invalid Credentials
Error alert shown when incorrect login credentials are entered.
![Login Error](screenshots/2.%20Login%20Error%20-%20Invalid%20Credentials.png)

### 3. Registration Successful
Confirmation alert displayed after a new user successfully registers.
![Registration Successful](screenshots/3.%20Registration%20Successful.png)

### 4. Student Dashboard
Main dashboard displayed after successful login.
![Student Dashboard](screenshots/4.%20Student%20Dashboard.png)

### 5. Add New Student – Success
Alert shown after a student is added successfully.
![Add Student Success](screenshots/5.%20Adding%20a%20New%20Student%20-%20Success.png)

### 6. Student List View (After Adding)
Updated student list after adding a new student.
![Student List After Adding](screenshots/6.%20Student%20List%20View%20(After%20Adding).png)

### 7. Update Student – Success
Alert shown after updating student details.
![Update Student Success](screenshots/7.%20Update%20Student%20-%20Success.png)

### 8. Student List View (After Updating)
Updated student list after editing student details.
![Student List After Updating](screenshots/8.%20Student%20List%20View%20(After%20Updating).png)

### 9. Delete Confirmation Popup
Confirmation dialog displayed before deleting a student.
![Delete Confirmation](screenshots/9.%20Delete%20Confirmation%20Popup.png)

### 10. Student List View (After Deletion)
Student list after a student record has been deleted.
![List After Deletion](screenshots/10.%20List%20After%20Deletion.png)

### 11. Frontend Project Structure (Angular)
Folder structure of the Angular frontend application.
![Frontend Structure](screenshots/11.%20VS%20Code%20Frontend%20Structure.png)

### 12. Backend Project Structure (ASP.NET Core)
Folder structure of the ASP.NET Core backend API.
![Backend Structure](screenshots/12.%20VS%20Studio%20Backend%20Structure.png)