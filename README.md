🚀 Employee Management System (AWS Full-Stack DevOps Platform)

A production-grade, cloud-native Employee Management System deployed on AWS using modern DevOps practices, including Terraform (IaC), ECS Fargate, ALB, RDS, S3, ECR, and GitHub Actions with OIDC authentication (no long-lived AWS credentials).

This project demonstrates end-to-end design and deployment of a scalable, secure, and automated cloud architecture following real-world production patterns.

🧠 Why This Project Matters

This is not a simple CRUD application.

It demonstrates:

Cloud architecture design on AWS (VPC, ECS, RDS, ALB)
Secure CI/CD with GitHub OIDC → AWS IAM Role Assumption (no static keys)
Infrastructure as Code using modular Terraform
Containerized microservice deployment (Docker + ECS Fargate)
Production-grade networking (public/private subnets + NAT Gateway)
Secrets management using AWS Secrets Manager
Observability using CloudWatch + SNS alerts
🏗️ High-Level Architecture
Frontend (React - S3 Static Hosting)
        ↓
(Optional CloudFront CDN)
        ↓
Application Load Balancer (ALB)
        ↓
ECS Fargate (Node.js / Express API)
        ↓
Amazon RDS (MySQL Database)
🔐 CI/CD Architecture (OIDC Secure Deployment)
GitHub Repository
        ↓
GitHub Actions Pipeline
        ↓
OIDC Authentication (Assume AWS IAM Role)
        ↓
Docker Build (Backend)
        ↓
Push Image → Amazon ECR
        ↓
Update ECS Service (Zero Downtime Deployment)

✔ No AWS access keys stored in GitHub
✔ Temporary role-based authentication (OIDC)
✔ Secure, production-grade deployment pipeline

🧰 Tech Stack

Backend
-Node.js
-Express.js
-Sequelize ORM
-MySQL (AWS RDS)
-JWT Authentication
-Passport.js

Frontend
-React.js
Axios

AWS S3 Static Hosting
-DevOps / Cloud
-AWS ECS (Fargate)
-AWS ALB (Application Load Balancer)
AWS RDS (MySQL)
AWS VPC (Custom networking)
AWS ECR (Container registry)
AWS S3 (Frontend hosting)
AWS Secrets Manager
AWS CloudWatch + SNS (Monitoring)
Terraform (Infrastructure as Code)
GitHub Actions (CI/CD with OIDC)
Docker


🏛️ Infrastructure as Code (Terraform)

The entire AWS infrastructure is modularized using Terraform:

infra/
│── modules/
│   ├── vpc/
│   ├── ecs/
│   ├── alb/
│   ├── rds/
│   ├── ecr/
│   ├── s3-frontend/
│   ├── monitoring/
│   └── secrets-manager/
│
│── main.tf (orchestrates modules)
│── variables.tf
│── outputs.tf
│── backend.tf (remote state: S3 + DynamoDB)

✔ Fully modular architecture
✔ Reusable infrastructure components
✔ Clean separation of concerns

🔐 Security Architecture
JWT-based authentication
Role-Based Access Control (Admin, HR, Manager, Employee)
AWS IAM least-privilege roles
GitHub Actions OIDC authentication (no static credentials)
Secrets stored in AWS Secrets Manager (not in .env)
Private subnets for ECS + RDS isolation
Security groups controlling service-to-service traffic
📊 Monitoring & Observability
CloudWatch Logs for ECS containers
CloudWatch Alarms:
ECS CPU utilization
RDS CPU utilization
ALB 5XX error monitoring
SNS email alerts for system anomalies
⚙️ Core Features
👥 Employee Management
Create, update, delete employees
Role-based profiles
🏢 Department Management
Department creation and assignment
Manager allocation
⏱ Attendance System
Clock-in / clock-out tracking
Work hour calculations
🏖 Leave Management
Leave requests & approval workflow
Leave balance tracking
💰 Payroll System
Salary calculations
Tax and deduction handling
Monthly payroll processing
📊 Performance Reviews
Employee evaluations
Rating and feedback system
📁 File Upload System
Upload documents to S3
Secure file retrieval
🧪 Running Locally
Backend
cd backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm start
Docker
docker-compose up --build
🚀 Deployment Workflow
Push code to GitHub
GitHub Actions triggers pipeline
Docker image built
Image pushed to AWS ECR
ECS service updated automatically
New version deployed with zero downtime
📸 UI Screenshots
## 📸 Application Screenshots

### 🔐 Login

### 📊 Dashboard Overview

### 📈 Dashboard Analytics

### 👥 Employee Management

### 🏢 Department Management

### ⏱ Attendance Management

### 🏖 Leave Management

### ✅ Leave Approval Workflow

### 💰 Payroll Management

### 📄 Payroll Details

### 📈 Performance Management

### 📊 Reporting System

### 📋 Report Details

### 👤 User Profile

### 📤 Document Upload


Login Page
Dashboard
Employee Management UI
Payroll System
Leave Approval System
Performance Review UI
🧠 Key Engineering Learnings
Designing production-grade AWS architectures
Terraform modular infrastructure design
ECS Fargate container orchestration
CI/CD automation using GitHub Actions + OIDC
Secure secret management in AWS Secrets Manager
Debugging distributed cloud systems
Cost awareness in cloud architecture
End-to-end full-stack cloud deployment
💡 What Makes This Project Stand Out

✔ Real production-style AWS architecture
✔ Secure CI/CD using OIDC (no static credentials)
✔ Fully containerized backend deployment
✔ Infrastructure as Code (Terraform modules)
✔ Proper networking (VPC + private subnets)
✔ Monitoring + alerting system implemented
✔ Cloud-native full-stack system

👤 Author

James Afful
Full Stack Developer | DevOps Engineer
AWS | Terraform | Docker | CI/CD | Kubernetes (Learning)

📌 Status

✔ Fully deployed on AWS
✔ Production-style architecture implemented
✔ CI/CD pipeline active
✔ Monitoring and alerting enabled
✔ Cost-controlled learning environment completed
