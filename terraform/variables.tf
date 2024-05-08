variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "name" {
  description = "Identifier for the application"
  default     = "rails_app"
}

variable "organization" {
  description = "Github organization"
  default     = "mhw29"
}

variable "oidc_arn" {
  description = "OIDC provider ARN"
}