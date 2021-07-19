
export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    alias: account.name
  };
};
