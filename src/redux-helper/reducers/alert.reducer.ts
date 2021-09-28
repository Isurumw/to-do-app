import {AlertAction} from '../actions/alert/alert.action';

type AlertState = {
  success?: string;
  error?: string;
};

const InitialState = {
  registered: undefined,
  error: undefined,
};

const AlertReducer = (
  state: AlertState = InitialState,
  action: AlertAction,
) => {
  switch (action.type) {
    case 'ON_SUCCESS_ALERT':
      return {
        ...state,
        registered: action.payload,
      };
    case 'ON_ERROR_ALERT':
      return {
        ...state,
        error: action.payload,
      };
    case 'ON_RESET_ALERT':
      return {
        ...state,
        success: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};

export default AlertReducer;
