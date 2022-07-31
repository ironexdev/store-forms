import { Ref } from "vue"
import FieldInterface from "~/Form/Field/FieldInterface";

export interface FormInterface {
  submitted: Ref<boolean>,
  valid: Ref<boolean>,
  fields: FieldInterface[],
  submit(): Promise<unknown>
}
