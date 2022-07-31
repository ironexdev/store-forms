export default interface RuleInterface {
  test (value): boolean
  message (field: string, value): string
}
