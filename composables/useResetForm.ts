import {FormInterface} from "../Form/FormInterface";

export function useResetForm(form: FormInterface) {
  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i]
    field.errors = []
  }

  form.errors.value = {}
  form.submitted.value = false
  form.valid.value = false
}
