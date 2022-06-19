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

export const isLoading: any = (state = {isLoading}) => !!state.isLoading;
export const isLoaded: any = (state = {isLoaded}) => !!state.isLoaded;
export const isError: any = (state = {isError}) => !!state.isError;

export const getData = (state = {data: {}}, defaultValue = {}) =>
  state.data || defaultValue;
