# Employee Management System (AWS Full-Stack Deployment)

A full-stack **Employee Management System** deployed on AWS using modern DevOps practices including **Terraform, Docker, ECS Fargate, RDS, S3, and CI/CD with GitHub Actions**.

The system manages employees, departments, attendance, payroll, leave management, and performance reviews with secure authentication and role-based access control.

---

##  Architecture Overview
Frontend (React - S3 Static Hosting)
↓
Amazon CloudFront (optional enhancement)
↓
Application Load Balancer (ALB)
↓
ECS Fargate (Node.js/Express API)
↓
Amazon RDS (MySQL)


---

##  Tech Stack

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL (Amazon RDS)
- JWT Authentication
- Passport.js

### Frontend
- React.js
- Axios
- Hosted on AWS S3 Static Website Hosting

### Infrastructure (DevOps)
- AWS ECS (Fargate)
- AWS ALB (Application Load Balancer)
- AWS RDS (MySQL)
- AWS S3
- AWS ECR
- Terraform (Infrastructure as Code)
- GitHub Actions (CI/CD)
- Docker

---

## Features

###  Employee Management
- Create, update, delete employees
- Role-based access (Admin, HR, Manager, Employee)

### Department Management
- Create and manage departments
- Assign managers

###  Attendance Tracking
- Clock-in / clock-out
- Work hour calculation

###  Leave Management
- Leave requests
- Approval workflow
- Leave balance tracking

###  Payroll System
- Salary calculation
- Tax computation
- Bonus & deductions

###  Performance Management
- Employee performance reviews
- Ratings and feedback

###  Authentication
- JWT-based authentication
- Secure login system
- Token blacklist support

---

## Infrastructure (Terraform)

Terraform provisions:

- VPC (Networking layer)
- Public & private subnets
- ECS Cluster (Fargate)
- Application Load Balancer
- RDS MySQL instance
- S3 bucket for frontend hosting
- Security Groups & IAM roles

---

## CI/CD Pipeline (GitHub Actions)

### Pipeline Flow:

GitHub Push → GitHub Actions → Docker Build → Push to ECR → ECS Deployment


Automates:
- Backend container build
- Image push to ECR
- ECS service update
- Zero-downtime deployment

---

##  Environment Variables

### Backend (.env)


Automates:
- Backend container build
- Image push to ECR
- ECS service update
- Zero-downtime deployment

---

##  Environment Variables

### Backend (.env)

PORT=3000

DB_HOST=your-rds-endpoint
DB_USER=admin
DB_PASSWORD=your_password
DB_NAME=empdb

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d


---

## Deployment URLs

### Frontend (S3)

/health

---

## 🧪 How to Run Locally

### Backend
```bash
cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm start

 Docker Setup
docker-compose up --build

Database Migration

Sequelize handles schema sync:

npx sequelize db:migrate

Security Notes

JWT authentication enabled
Rate limiting for API protection
Helmet for HTTP security headers
CORS configured for frontend integration

Lessons Learned

This project provided hands-on experience with:

   AWS ECS Fargate deployment
   Load balancer routing & networking
   RDS database integration
   Terraform infrastructure automation
   CI/CD pipeline design
   Debugging distributed systems
   Production-level authentication handling

Author

James Afful

   Full Stack Developer
   DevOps Engineer (AWS | Terraform | Docker | CI/CD)

Status

 Fully deployed and functional
 Production-ready full-stack system
 End-to-end AWS architecture implemented


