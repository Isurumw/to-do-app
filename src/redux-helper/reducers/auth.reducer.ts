import {AuthAction} from '../actions/auth/auth.action';

type AuthState = {
  registered: boolean;
  loading: boolean;
};

const InitialState = {
  registered: false,
  loading: false,
};

const AuthReducer = (state: AuthState = InitialState, action: AuthAction) => {
  switch (action.type) {
    case 'ON_AUTH':
      return {
        ...state,
        registered: action.payload,
      };
    case 'ON_LOADING_AUTH':
      return {
        ...state,
        loading: action.payload,
      };
    case 'ON_RESET_AUTH':
      return {
        ...state,
        registered: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
