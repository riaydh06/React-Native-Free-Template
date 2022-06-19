export const truncateString = (str, limit = 20) =>
  str.length > limit ? `${str.substr(0, limit)}...` : str;
