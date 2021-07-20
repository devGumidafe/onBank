import moment from 'moment';
import { createFormValidation } from '@lemoncode/fonk';

const dateValidator = ({ value }) => {
  const dateArray = Object.values(value).join('/');

  const succeeded =
    moment(dateArray, 'DD/MM/YYYY', true).isValid() && // Fecha válida
    moment(dateArray, 'DD/MM/YYYY').isAfter() || // Fecha mayor
    moment(dateArray, 'DD/MM/YYYY').isSame()  // Fecha igual

  return {
    succeeded,
    message: succeeded
      ? ''
      : 'Fecha no válida'
  };
};

const validationSchema = {
  field: {
    date: [dateValidator]
  }
}

export const dateValidation = createFormValidation(validationSchema);
