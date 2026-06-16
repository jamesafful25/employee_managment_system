# 🚀 Employee Management System

### Production-Grade AWS Full-Stack DevOps Platform

---

## 📌 Overview

This project is a **cloud-native Employee Management System** deployed on AWS using modern DevOps practices.

It demonstrates a complete production-style architecture including:

* Infrastructure as Code (Terraform)
* Containerized backend (Docker + ECS Fargate)
* Secure CI/CD pipeline (GitHub Actions + OIDC)
* Scalable AWS networking (VPC, ALB, RDS)
* Centralized secrets management (AWS Secrets Manager)
* Monitoring and alerting (CloudWatch + SNS)

---

## 🧠 Architecture Overview

> High-level system design

```
Frontend (React on S3)
        ↓
Application Load Balancer (ALB)
        ↓
ECS Fargate (Node.js API)
        ↓
Amazon RDS (MySQL)
```

---

## 🔐 CI/CD Pipeline (OIDC Secure Deployment)

```
GitHub Push
    ↓
GitHub Actions
    ↓
OIDC Authentication (No AWS keys)
    ↓
Docker Build
    ↓
Push to ECR
    ↓
Terraform / ECS Deployment
```

✔ No static AWS credentials
✔ Temporary IAM role assumption
✔ Production-grade secure pipeline

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express.js
* Sequelize ORM
* MySQL (AWS RDS)
* JWT Authentication

### Frontend

* React.js
* Axios
* Hosted on AWS S3

### DevOps / Cloud

* AWS ECS (Fargate)
* AWS ALB
* AWS VPC (custom networking)
* AWS RDS (MySQL)
* AWS ECR
* AWS S3
* AWS Secrets Manager
* AWS CloudWatch + SNS
* Terraform (IaC)
* GitHub Actions (CI/CD)
* Docker

---

## 🏗️ Infrastructure (Terraform Modules)

Modular infrastructure design:

```
infra/
 ├── modules/
 │   ├── vpc
 │   ├── ecs
 │   ├── alb
 │   ├── rds
 │   ├── ecr
 │   ├── s3-frontend
 │   ├── monitoring
 │   └── secrets-manager
 │
 ├── main.tf
 ├── variables.tf
 ├── outputs.tf
 ├── backend.tf
```

✔ Fully modular
✔ Reusable components
✔ Clean separation of concerns

---

## 🔐 Security Design

* JWT authentication
* Role-Based Access Control (Admin / HR / Manager / Employee)
* IAM least-privilege policies
* GitHub OIDC authentication (no static keys)
* Secrets stored in AWS Secrets Manager
* Private subnets for ECS & RDS
* Security groups for service isolation

---

## 📊 Monitoring & Observability

* CloudWatch logs for ECS containers
* CloudWatch alarms:

  * ECS CPU utilization
  * RDS CPU utilization
  * ALB 5XX errors
* SNS email alerts for system issues

---

## ⚙️ Core Features

* 👥 Employee management (CRUD)
* 🏢 Department management
* ⏱ Attendance tracking
* 🏖 Leave management workflow
* 💰 Payroll system
* 📈 Performance reviews
* 📄 Reporting system
* 📤 File upload (S3 storage)
* 🔐 Secure authentication system

---

## 📸 UI Screenshots

### Layout (replace with your images)

| Login                      | Dashboard                               |
| -------------------------- | --------------------------------------- |
| ![](screenshots/login.png) | ![](screenshots/dashboard-overview.png) |

| Employees                      | Departments                     |
| ------------------------------ | ------------------------------- |
| ![](screenshots/employees.png) | ![](screenshots/department.png) |

| Attendance                      | Leave                      |
| ------------------------------- | -------------------------- |
| ![](screenshots/attendance.png) | ![](screenshots/leave.png) |

| Payroll                      | Performance                      |
| ---------------------------- | -------------------------------- |
| ![](screenshots/payroll.png) | ![](screenshots/performance.png) |

| Reports                     | Profile                      |
| --------------------------- | ---------------------------- |
| ![](screenshots/report.png) | ![](screenshots/profile.png) |

---

## 🚀 Deployment Workflow

```
Push to GitHub
→ GitHub Actions triggered
→ Docker image built
→ Image pushed to ECR
→ ECS service updated
→ Zero-downtime deployment
```

---

## 🧠 Key Engineering Highlights

* Production-grade AWS architecture design
* Terraform modular infrastructure
* Secure CI/CD with GitHub OIDC
* Container orchestration with ECS Fargate
* Secrets management with AWS Secrets Manager
* Observability with CloudWatch + SNS
* Scalable VPC networking design
* Full-stack cloud deployment

---

## 💡 What Makes This Project Stand Out

✔ Real AWS production architecture (not tutorial-level)
✔ Secure CI/CD without AWS access keys
✔ Fully containerized backend deployment
✔ Modular Terraform design
✔ Proper networking (VPC + private subnets)
✔ Monitoring + alerting system implemented
✔ End-to-end cloud-native system

---

## 👤 Author

**James Afful**
Full Stack Developer | DevOps Engineer
AWS | Terraform | Docker | CI/CD | Kubernetes (Learning)

---

## 📌 Status

✔ Fully deployed on AWS
✔ CI/CD pipeline active
✔ Monitoring enabled
✔ Infrastructure fully automated with Terraform
✔ Production-style architecture implemented
