import { useResetForm } from "./useResetForm";
import FieldInterface from "../Form/Field/FieldInterface";

export function useValidateForm (fields: FieldInterface[], valid: boolean): {[key: string]: string[]} {
  const errors = {}

  useResetForm(fields)

  for (let i = 0; i < fields.length; i++) {
    const field: FieldInterface = fields[i]
    const required = field.required

    if (required && (typeof field.value === "boolean" ? !field.value : !field.value.length)) {
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

