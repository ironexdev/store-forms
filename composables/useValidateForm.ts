import FieldInterface from "~/Form/Field/FieldInterface";
import { useResetForm } from "./useResetForm";

export function useValidateForm(fields: FieldInterface[], valid: boolean): {[key: string]: string[]} {
    const errors = {}
    useResetForm(fields)
    valid = true

    for (let i = 0; i < fields.length; i++) {
      const field: FieldInterface = fields[i]
      const required = field.required

      if (required && !field.value.length) {
        valid = false

        field.errors.push(field.requiredErrorMessage)

        if (typeof errors[field.name] === "undefined") {
          errors[field.name] = []
        }

        errors[field.name].push(field.requiredErrorMessage)

        continue
      }

      if (required || (!required && field.value.length)) {
        for (let ii = 0; ii < field.rules.length; ii++) { // Validate rules
          const rule = field.rules[ii]

          if (!rule.test(field.value)) {
            valid = false

            const message = rule.message(field.title, field.value)
            field.errors.push(message)

            if (typeof errors[field.name] === "undefined") {
              errors[field.name] = []
            }

            errors[field.name].push(message)
          }
        }
      }
    }

    return errors
}
