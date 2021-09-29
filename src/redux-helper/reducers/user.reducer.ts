import {UserAction} from '../actions/user/user.action';

type AuthState = {
  user?: User;
  error?: string;
};

const InitialState = {
  registered: undefined,
  error: undefined,
};

const UserReducer = (state: AuthState = InitialState, action: UserAction) => {
  switch (action.type) {
    case 'ON_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ON_ERROR_USER':
      return {
        ...state,
        error: action.payload,
      };
    case 'ON_RESET_USER':
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default UserReducer;
