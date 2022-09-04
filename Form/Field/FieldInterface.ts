import RuleInterface from "../Rules/RuleInterface";

export default interface FieldInterface {
  name: string
  title: string
  value
  rules: RuleInterface[]
  required: boolean
  errors: string[]
  requiredErrorMessage: string
  description: string

  isValid(): boolean

  validate(): string[]
}
