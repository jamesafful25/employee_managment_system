output "db_secret_arn" {
  value = aws_secretsmanager_secret.db.arn
}

output "db_instance_identifier" {
  value = aws_db_instance.main.identifier
}

