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

export const isLoading = (state = {}) => !!state.isLoading;
export const isLoaded = (state = {}) => !!state.isLoaded;
export const isError = (state = {}) => !!state.isError;

export const getData = (state = {}, defaultValue = {}) =>
  state.data || defaultValue;
