import { useResetForm } from "./useResetForm";
import FieldInterface from "../Form/Field/FieldInterface";
import {_ExtractActionsFromSetupStore, _ExtractGettersFromSetupStore, _ExtractStateFromSetupStore, defineStore, StoreDefinition} from "pinia"
import {FormInterface} from "../Form/FormInterface";

export function useValidateForm (form: StoreDefinition<string, _ExtractStateFromSetupStore<FormInterface>, _ExtractGettersFromSetupStore<FormInterface>, _ExtractActionsFromSetupStore<FormInterface>>) {
  const errors = {}

  useResetForm(form.fields)

  for (let i = 0; i < form.fields.length; i++) {
    const field: FieldInterface = form.fields[i]
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
}
