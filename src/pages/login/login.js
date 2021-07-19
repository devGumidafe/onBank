
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers/element.helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

let login = {
  user: '',
  password: ''
};

onUpdateField('user', ({ target }) => {
  login = {
    ...login,
    user: target.value
  };

  formValidation.validateField('user', login.user).then(result => {
    onSetError('user', result);
  });
});

onUpdateField('password', ({ target }) => {
  login = {
    ...login,
    password: target.value
  };

  formValidation.validateField('password', login.password).then(result => {
    onSetError('password', result);
  });
});

onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      isValidLogin(login).then(isValid => {
        onNavigate(isValid);
      });
    }
  });
});

const onNavigate = (isValid) => {
  isValid
    ? history.push(routes.accountList)
    : alert('Usuario y/o contraseña no válidos');
}

