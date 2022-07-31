import RuleInterface from "~/Form/Rules/RuleInterface";

export default interface FieldInterface {
  name: string
  title: string
  value
  rules: RuleInterface[]
  required: boolean
  errors: string[]
  requiredErrorMessage: string

  isValid(): boolean

  validate(): string[]
}
