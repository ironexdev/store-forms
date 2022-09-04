import {_ExtractActionsFromSetupStore, _ExtractGettersFromSetupStore, _ExtractStateFromSetupStore, StoreDefinition} from "pinia";
import {FormInterface} from "../Form/FormInterface";

export function useResetForm(form: StoreDefinition<string, _ExtractStateFromSetupStore<FormInterface>, _ExtractGettersFromSetupStore<FormInterface>, _ExtractActionsFromSetupStore<FormInterface>>) {
  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i]
    field.errors = []
  }

  form.errors.value = {}
  form.submitted.value = false
  form.valid.value = false
}
