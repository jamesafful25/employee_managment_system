
variable "aws_region"       { default = "us-east-1" }
variable "app_name"         { default = "emp-mgmt" }
variable "db_name"          { default = "empdb" }
variable "db_username"      { default = "admin" }
variable "container_port"   { default = 3000 }
variable "desired_count"    { default = 2 }
variable "alert_email" {
  type = string
}
