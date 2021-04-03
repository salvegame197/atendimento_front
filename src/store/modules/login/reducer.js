import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = true;
      newState.isLoggedIn = true;
      return newState;
    }
    case types.LOGIN_REQUEST: {
      return state;
    }
    case types.LOGIN_FAILURE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
