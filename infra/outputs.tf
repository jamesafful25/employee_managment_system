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