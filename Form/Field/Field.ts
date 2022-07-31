import FieldInterface from "~/Form/Field/FieldInterface"
import RuleInterface from "~/Form/Rules/RuleInterface";

export default class Field implements FieldInterface {
  public requiredErrorMessage: string

  constructor (
    public name: string,
    public title: string,
    public value,
    public rules: RuleInterface[],
    public required: boolean,
    public errors: string[]
  ) {
    this.requiredErrorMessage = "Required"
  }

  public isValid (): boolean {
    return !!this.errors.length
  }

  public validate (): string[] {
    this.errors = []
    console.log(this)
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
