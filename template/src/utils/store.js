export const getInitialState = (data = {}) => ({
  data,
  isLoading: false,
  isLoaded: false,
  isError: false,
});

export const getLoadingState = (data = {}) => ({
  data,
  isLoading: true,
  isLoaded: false,
  isError: false,
});

export const getSuccessState = (data = {}) => ({
  data,
  isLoading: false,
  isLoaded: true,
  isError: false,
});

export const getFailedState = (data = {}) => ({
  data,
  isLoading: false,
  isLoaded: false,
  isError: true,
});
