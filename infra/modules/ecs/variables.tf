variable "app_name" {
  type = string
}

variable "ecr_repo_url" {
  type = string
}

variable "container_port" {
  type = number
}

variable "db_secret_arn" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "desired_count" {
  type = number
}

variable "target_group_arn" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "alb_security_group_id" {
  type = string
}