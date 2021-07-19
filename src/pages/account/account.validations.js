import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    type: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    alias: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 4 },
        message: 'El tamaño mínimo son {{length}} caracteres'
      }
    ]
  }
}

export const formValidation = createFormValidation(validationSchema);
