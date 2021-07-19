import { getMovementList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { history } from '../../core/router';

const { id: accountId } = history.getParams();

getMovementList().then(movementList => {gi
  const viewModelMovementList = mapMovementListFromApiToViewModel(movementList);

  addMovementRows(viewModelMovementList);
})
