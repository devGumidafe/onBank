import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list-mappers';
import { onUpdateField } from '../../common/helpers';
import { history, routes } from '../../core/router';

getAccountList().then(accountList => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);

  addAccountRows(viewModelAccountList);

  onNavigate(viewModelAccountList);
});


const onNavigate = (accountList) => {
  accountList.forEach(account => {

    onUpdateField(`select-${account.id}`, ({ target }) => {
      history.push(target.value);
    });
  });
};
