output "github_actions_role_arn" {
  value       = aws_iam_role.github_actions.arn
  description = "Copy this ARN into GitHub Secrets as AWS_ROLE_ARN"
}

output "aws_account_id" {
  value = data.aws_caller_identity.current.account_id
}

data "aws_caller_identity" "current" {}