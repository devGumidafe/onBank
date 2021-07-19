import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers/element.helpers';
import { formValidation } from './account.validations';
import { insertAccount, updateAccount } from './account.api';
import { getAccount } from '../../common/api/api';
import { history, routes } from '../../core/router';
import { mapAccountFromViewModelToApi } from './account.mappers';
import { mapAccountFromApiToViewModel } from '../../common/mappers/mappers';

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
  getAccount(params.id).then(apiAccount => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  })
}

let account = {
  id: '',
  type: '',
  alias: ''
}

onUpdateField('type', ({ target }) => {
  account = {
    ...account,
    type: target.value
  };

  formValidation.validateField('type', account.type).then(result => {
    onSetError('type', result);
  });
});

onUpdateField('alias', ({ target }) => {
  account = {
    ...account,
    alias: target.value
  };

  formValidation.validateField('alias', account.alias).then(result => {
    onSetError('alias', result);
  });
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(account).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      onSave().then(apiAccount => {
        history.push(routes.accountList);
      })
    }
  });

});

const onSave = () => {
  const apiAccount = mapAccountFromViewModelToApi(account);

  return (isEditMode)
    ? updateAccount(apiAccount)
    : insertAccount(apiAccount)
}
