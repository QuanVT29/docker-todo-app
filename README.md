# Dockerized Full-Stack Todo Application

A robust, containerized Full-Stack Todo application built to demonstrate best practices in **Docker** orchestration, multi-stage builds, and microservice communication.

## 🚀 Architecture
The application consists of four main services orchestrated by `docker-compose`:
* **Frontend:** React.js (Served by Nginx)
* **Backend:** Node.js & Express API
* **Database:** MongoDB
* **Reverse Proxy:** Nginx

## 🛠 Tech Stack
- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Containerization:** Docker, Docker Compose
- **Web Server:** Nginx

## 📋 Features
- Full CRUD operations for tasks.
- Containerized development and production environments.
- Optimized multi-stage Docker builds to minimize image size.
- Environment variable management for security.
- Seamless inter-container networking.

## 📦 Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

## ⚙️ Getting Started

### **Clone the repository:**

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/QuanVT29/docker-todo-app.git)
   
cd your-repo-name


1. Configure environment variables:
   
Copy the example environment file and update it if necessary: cp .env.example .env

2. Launch the application:
   
Build and start all services in detached mode: docker-compose up --build -d

3. Access the application:

- Frontend: http://localhost:80

- API: http://localhost:3000

  

## 🐳 Docker Highlights

Multi-stage Build: Backend Dockerfile utilizes multi-stage builds to separate build dependencies from the production runtime, resulting in a lightweight image.

Networking: All services communicate via a dedicated bridge network defined in docker-compose.yml.

Volume Mounting: Source code is mounted to containers for hot-reloading during development.


## 📂 Project Structure

.
├── backend/            # Express.js API
├── frontend/           # React Client
├── nginx/              # Nginx configuration
├── docker-compose.yml  # Services orchestration
├── .dockerignore       # Excluding node_modules and .git
└── .env.example        # Environment variables template


## 📄 License
This project is licensed under the MIT License.
