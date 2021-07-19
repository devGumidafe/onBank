export const mapMovementListFromApiToViewModel = (movemenList) => {
  return movemenList.map(movement => (
    mapMovementFromApiToViewModel(movement)
  ));
}

const mapMovementFromApiToViewModel = (movement) => {
  return {
    id: movement.accountId,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    description: movement.description,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString()
  };
}

