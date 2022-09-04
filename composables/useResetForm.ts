import {FormInterface} from "../Form/FormInterface";
import {ref} from "vue";

export function useResetForm(form: FormInterface) {
  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i]
    field.errors = []
  }

  form.errors = ref({})
  form.submitted = ref(false)
  form.valid = ref(false)
}
