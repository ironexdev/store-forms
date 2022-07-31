import FieldInterface from "~/Form/Field/FieldInterface";

export function useResetForm(fields: FieldInterface[]) {
    const errors = []

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i]
      field.errors = []
    }
}
