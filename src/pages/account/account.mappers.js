export const mapAccountFromViewModelToApi = (account) => {
  return {
    ...account,
    name: account.alias
  };
};
