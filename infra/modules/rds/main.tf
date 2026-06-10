# -----------------------------
# Subnet Group
# -----------------------------
resource "aws_db_subnet_group" "main" {
  name       = "${var.app_name}-db-subnet-group"
  subnet_ids = var.private_subnet_ids
}

# -----------------------------
# Generate DB Password (NO HARDCODING)
# -----------------------------
resource "random_password" "db" {
  length  = 16
  special = false
}

# -----------------------------
# RDS Instance
# -----------------------------
resource "aws_db_instance" "main" {
  identifier        = "${var.app_name}-mysql"
  engine            = "mysql"
  engine_version    = "8.0"
  instance_class    = "db.t3.micro"

  allocated_storage = 20
  storage_encrypted = true

  db_name  = var.db_name
  username = var.db_username
  password = random_password.db.result

  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]

  multi_az            = true
  skip_final_snapshot = true
  deletion_protection = true
}

# -----------------------------
# Secrets Manager Secret (container only)
# -----------------------------
resource "aws_secretsmanager_secret" "db" {
  name = "${var.app_name}/db-credentials"
}

# -----------------------------
# Secret Values
# -----------------------------
resource "aws_secretsmanager_secret_version" "db" {
  secret_id = aws_secretsmanager_secret.db.id

  secret_string = jsonencode({
    username = var.db_username
    password = random_password.db.result
    host     = aws_db_instance.main.address
    port     = 3306
    dbname   = var.db_name
  })
}