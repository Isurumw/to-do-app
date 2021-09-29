import {Dispatch} from 'react';

import {onErrorAlert, AlertAction} from '../alert/alert.action';
import authenticate from './data/authenticate';

interface ActionAuth {
  readonly type: 'ON_AUTH';
  payload: boolean;
}

interface ActionLoadingAuth {
  readonly type: 'ON_LOADING_AUTH';
  payload: boolean;
}

interface ActionResetAuth {
  readonly type: 'ON_RESET_AUTH';
}

export type AuthAction =
  | ActionAuth
  | AlertAction
  | ActionResetAuth
  | ActionLoadingAuth;

export const onResetAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: 'ON_RESET_AUTH',
    });
  };
};

export const onAuth = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: 'ON_LOADING_AUTH',
        payload: true,
      });
      const registered = await authenticate(email, password);

      if (registered) {
        dispatch({
          type: 'ON_AUTH',
          payload: registered,
        });
      } else {
        onErrorAlert('Incorrect email or password.', dispatch);
      }
    } catch (e) {
      onErrorAlert('Incorrect email or password.', dispatch);
    } finally {
      dispatch({
        type: 'ON_LOADING_AUTH',
        payload: false,
      });
    }
  };
};
