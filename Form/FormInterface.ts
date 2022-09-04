import {Ref} from "vue"
import FieldInterface from "./Field/FieldInterface";

export interface FormInterface {
  submitted: Ref<boolean>,
  valid: Ref<boolean>,
  fields: FieldInterface[],
  errors: Ref<{ [key: string]: string[] }> | Ref<object>,

  submit(): Promise<unknown>
}
