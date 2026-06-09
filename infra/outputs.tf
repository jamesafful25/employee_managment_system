output "ecr_repo" {
  value = module.ecr.repository_url
}

output "ecs_cluster" {
  value = module.ecs.cluster_name
}

output "ecs_service" {
  value = module.ecs.service_name
}

output "rds_identifier" {
  value = module.rds.db_instance_identifier
}

output "db_secret_arn" {
  value = module.rds.db_secret_arn
}

output "private_subnets" {
  value = module.vpc.private_subnet_ids
}

output "ecs_security_group_id" {
  value = module.ecs.security_group_id
}

output "db_host" {
  value = module.rds.db_host
}

output "db_port" {
  value = module.rds.db_port
}

output "rds_endpoint" {
  value = module.rds.endpoint
}