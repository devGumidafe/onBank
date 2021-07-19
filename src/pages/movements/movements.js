import { onSetValues } from '../../common/helpers/element.helpers';
import { history } from '../../core/router';
import { getMovementList, getMovementListById } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { mapAccountFromApiToViewModel } from '../../common/mappers/mappers';
import { getAccount } from '../../common/api/api';

const { id: accountId } = history.getParams();
const isAccountId = Boolean(accountId);

if (accountId) {
  getAccount(accountId).then(account => {
    const apiAccount = mapAccountFromApiToViewModel(account);

    onSetValues(apiAccount)
  });
}

const loadMovementList = () => {
  return (isAccountId)
    ? getMovementListById(accountId)
    : getMovementList()
}

loadMovementList().then(movementList => {
  const viewModelMovementList = mapMovementListFromApiToViewModel(movementList);

  addMovementRows(viewModelMovementList);
})



