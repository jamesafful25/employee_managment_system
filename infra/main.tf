# -------------------------
# VPC
# -------------------------
module "vpc" {
  source   = "./modules/vpc"
  app_name = var.app_name
}

# -------------------------
# ECR (Docker registry for ECS)
# -------------------------
module "ecr" {
  source   = "./modules/ecr"
  app_name = var.app_name
}

# -------------------------
# S3 FRONTEND
# -------------------------
module "s3_frontend" {
  source   = "./modules/s3-frontend"
  app_name = var.app_name
}

# -------------------------
# ALB
# -------------------------
module "alb" {
  source = "./modules/alb"

  app_name          = var.app_name
  vpc_id            = module.vpc.vpc_id
  public_subnet_ids = module.vpc.public_subnet_ids
  container_port    = var.container_port
}

# -------------------------
# ECS (Backend service)
# -------------------------
module "ecs" {
  source = "./modules/ecs"

  app_name              = var.app_name
  ecr_repo_url          = module.ecr.repository_url
  container_port        = var.container_port
  db_secret_arn         = module.rds.db_secret_arn
  aws_region            = var.aws_region
  private_subnet_ids    = module.vpc.private_subnet_ids
  desired_count         = var.desired_count
  target_group_arn      = module.alb.target_group_arn
  vpc_id                = module.vpc.vpc_id
  alb_security_group_id = module.alb.alb_security_group_id
  db_host               = module.rds.endpoint
  db_port               = "3306"
  db_user               = "admin"
  db_name               = var.db_name
}


# -------------------------
# RDS (Database)
# -------------------------
module "rds" {
  source = "./modules/rds"

  app_name              = var.app_name
  vpc_id                = module.vpc.vpc_id
  private_subnet_ids    = module.vpc.private_subnet_ids
  ecs_security_group_id = module.ecs.security_group_id

  db_name     = var.db_name
  db_username = var.db_username


}

# -------------------------
# MONITORING
# -------------------------
module "monitoring" {
  source = "./modules/monitoring"

  app_name               = var.app_name
  alert_email            = var.alert_email
  ecs_cluster_name       = module.ecs.cluster_name
  ecs_service_name       = module.ecs.service_name
  db_instance_identifier = module.rds.db_instance_identifier
  alb_arn_suffix         = module.alb.alb_arn_suffix
}