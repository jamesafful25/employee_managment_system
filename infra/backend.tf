terraform {
  backend "s3" {
    bucket         = "jamesafful25-emp-mgmt-tf-state"
    key            = "emp-mgmt/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}