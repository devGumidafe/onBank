import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../../common/api/api'
import { history } from '../../core/router';

const { id: accountId } = history.getParams();

getAccountList().then(accountList => {
  setAccountOptions(accountList, accountId);
})
