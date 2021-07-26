import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers';
import { formValidation } from './transfer.validations';
import { dateValidation } from './customValidation';
import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../../common/api/api'
import { history, routes } from '../../core/router';
import { insertTransfer } from './transfer.api';


const { id: accountId } = history.getParams();

getAccountList().then(accountList => {
  setAccountOptions(accountList, accountId);
});

let transfer = {
  id: '',
  senderAccount: accountId,
  receiverAccount: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  transaction: '',
  realTransaction: '',
  email: ''
}

onUpdateField('select-account', ({ target }) => {
  transfer = {
    ...transfer,
    senderAccount: target.value
  };
  formValidation.validateField('senderAccount', transfer.senderAccount).then(result => {
    onSetError('select-account', result);
  });
});

onUpdateField('iban', ({ target }) => {
  transfer = {
    ...transfer,
    receiverAccount: target.value
  };
  formValidation.validateField('receiverAccount', transfer.receiverAccount).then(result => {
    onSetError('iban', result);
  });
});

onUpdateField('name', ({ target }) => {
  transfer = {
    ...transfer,
    name: target.value
  };
  formValidation.validateField('name', transfer.name).then(result => {
    onSetError('name', result);
  });
});

onUpdateField('amount', ({ target }) => {
  transfer = {
    ...transfer,
    amount: target.value
  };
  formValidation.validateField('amount', transfer.amount).then(result => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', ({ target }) => {
  transfer = {
    ...transfer,
    concept: target.value
  };
  formValidation.validateField('concept', transfer.concept).then(result => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', ({ target }) => {
  transfer = {
    ...transfer,
    notes: target.value
  };
});

onUpdateField('email', ({ target }) => {
  transfer = {
    ...transfer,
    email: target.value
  };
  formValidation.validateField('email', transfer.email).then(result => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      onSave();

      insertTransfer(transfer).then(result => {
        history.push(routes.accountList);
      })
    }
  });
});

// Objeto y funciones para la fecha
let realTransaction = {
  day: '',
  month: '',
  year: ''
}

let isValidDate = false;

onUpdateField('day', ({ target }) => {
  realTransaction = {
    ...realTransaction,
    day: target.value
  };
  dateValidation.validateField('date', realTransaction).then(result => {
    onSetError('date', result);
    isValidDate = result.succeeded;
  });
});

onUpdateField('month', ({ target }) => {
  realTransaction = {
    ...realTransaction,
    month: target.value
  };
  dateValidation.validateField('date', realTransaction).then(result => {
    onSetError('date', result);
    isValidDate = result.succeeded;
  });
});

onUpdateField('year', ({ target }) => {
  realTransaction = {
    ...realTransaction,
    year: target.value
  };
  dateValidation.validateField('date', realTransaction).then(result => {
    onSetError('date', result);
    isValidDate = result.succeeded;
  });
});


// Creamos id aleatorio y asignamos fechas
const onSave = () => {
  transfer = {
    ...transfer,
    id: Date.now(),
    transaction: new Date().toISOString(),
    realTransaction: (isValidDate)
      ? Object.values(realTransaction).join('/')
      : new Date().toISOString(),
  }

  isValidate = false;
}
