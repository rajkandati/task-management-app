# 3-Tier Task Management Application

A simple task management application with React frontend, Node.js backend, and PostgreSQL database.

## Architecture
- **Frontend**: React app (Port 3000)
- **Backend**: Node.js Express API (Port 5000)
- **Database**: PostgreSQL (Port 5432)

## Local Development

### Prerequisites
- Docker and Docker Compose
- Node.js (optional, for development)

### Quick Start
```bash
# Clone and navigate to project
cd task-management-app

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# Database: localhost:5432
```

### Individual Service Setup
```bash
# Frontend
cd frontend
npm install
npm start

# Backend
cd backend
npm install
npm start

# Database (using Docker)
docker run -d \
  --name postgres \
  -e POSTGRES_DB=taskdb \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  postgres:15-alpine
```

## ECS Deployment

### Build and Push Images
```bash
# Build images
docker build -t task-frontend ./frontend
docker build -t task-backend ./backend

# Tag for ECR
docker tag task-frontend:latest <account>.dkr.ecr.<region>.amazonaws.com/task-frontend:latest
docker tag task-backend:latest <account>.dkr.ecr.<region>.amazonaws.com/task-backend:latest

# Push to ECR
docker push <account>.dkr.ecr.<region>.amazonaws.com/task-frontend:latest
docker push <account>.dkr.ecr.<region>.amazonaws.com/task-backend:latest
```

### ECS Task Definitions
- Frontend: Port 3000, 256 CPU, 512 MB
- Backend: Port 5000, 512 CPU, 1024 MB
- Database: Use RDS PostgreSQL

## API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `DELETE /api/tasks/:id` - Delete task
- `GET /health` - Health check