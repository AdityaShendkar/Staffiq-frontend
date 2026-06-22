# 📋 Staffiq Frontend

A modern and responsive employee management frontend built with **React.js, Vite, and Axios**. This application provides a simple user interface to perform employee management operations by communicating with the Staffiq Spring Boot REST API.

**React.js • Vite • Axios • REST API**

---

## 🚀 Overview

Staffiq Frontend is the client-side application of the Staffiq Employee Management System. It allows users to:

* Add new employees
* View all employees
* View employee details
* Update existing employee information
* Communicate with the Spring Boot backend using REST APIs

---

## 🔗 Backend Repository

The Spring Boot backend for this project is available here:

**GitHub Repository:**
https://github.com/AdityaShendkar/Staffiq

---

## 🛠️ Tech Stack

| Technology   | Description                                   |
| ------------ | --------------------------------------------- |
| ⚛️ React.js  | Frontend library for building user interfaces |
| ⚡ Vite       | Fast development build tool                   |
| 🔄 Axios     | HTTP client for API communication             |
| 🎨 HTML/CSS  | User interface styling                        |
| 🔗 REST APIs | Communication with the backend                |

---

## 📁 Project Structure

```
staffiq-frontend/
├── src/
│   ├── App.jsx              # Main application component
│   ├── EmployeeForm.jsx     # Add & update employee form
│   ├── EmployeeList.jsx     # Display employee list
│   ├── main.jsx             # Application entry point
│   ├── App.css              # Component styling
│   └── index.css            # Global styling
├── public/
├── package.json             # Project dependencies & scripts
└── vite.config.js           # Vite configuration
```

---

## ⚙️ Prerequisites

Before running the application, ensure you have:

* Node.js 18+ installed
* npm package manager
* Running Staffiq Spring Boot backend server on `http://localhost:8080`

---

## 🏃 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AdityaShendkar/Staffiq-frontend.git
cd Staffiq-frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## 🔌 API Integration

The frontend communicates with the following backend API endpoints:

| Method | Endpoint                       | Description             |
| ------ | ------------------------------ | ----------------------- |
| GET    | `/employee/employees?size=100` | Fetch all employees     |
| GET    | `/employee/id/{id}`            | Fetch employee details  |
| POST   | `/employee/add`                | Add a new employee      |
| PUT    | `/employee/update/{id}`        | Update employee details |

Base URL:

```
http://localhost:8080
```

---

## ✨ Features

* Employee listing with table view
* Add new employee functionality
* Update employee details
* Dynamic form switching between add and edit modes
* REST API integration using Axios
* Fast development experience with Vite

---

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 👨‍💻 Author

**Aditya Shendkar**

GitHub: https://github.com/AdityaShendkar

---

⭐ If you find this project useful, consider giving it a star!
