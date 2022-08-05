import FieldInterface from "./FieldInterface";
import RuleInterface from "../Rules/RuleInterface";

export default class Field implements FieldInterface {
  public requiredErrorMessage = "Required"

  constructor (
    public name: string,
    public title: string,
    public value,
    public rules: RuleInterface[],
    public required: boolean,
    public errors: string[],
  ) {
  }

  public isValid (): boolean {
    return !this.errors.length
  }

  public validate (): string[] {
    this.errors = []

    if (this.required && typeof this.value === "boolean" ? !this.value : !this.value.length) {
      this.errors.push(this.requiredErrorMessage)
    }

    for (let i = 0; i < this.rules.length; i++) {
      const rule = this.rules[i]

      if (!rule.test(this.value)) {
        const message = rule.message(this.title, this.value)
        this.errors.push(message)
      }
    }

    return this.errors
  }
}
