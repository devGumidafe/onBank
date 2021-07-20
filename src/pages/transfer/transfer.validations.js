import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    senderAccount: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    receiverAccount: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/ },
        message: 'IBAN no válido'
      }
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido'
      }
    ],
  }
}

export const formValidation = createFormValidation(validationSchema);

