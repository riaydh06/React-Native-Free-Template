export const truncateString = (str: string, limit = 20) =>
  str.length > limit ? `${str.substr(0, limit)}...` : str;
