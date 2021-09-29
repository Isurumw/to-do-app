import {Dispatch} from 'react';

interface ActionSuccessAlert {
  readonly type: 'ON_SUCCESS_ALERT';
  payload: string;
}

interface ActionErrorAuth {
  readonly type: 'ON_ERROR_ALERT';
  payload: string;
}

interface ActionResetAlert {
  readonly type: 'ON_RESET_ALERT';
}

const duration = 5;

export type AlertAction =
  | ActionSuccessAlert
  | ActionErrorAuth
  | ActionResetAlert;

export const onErrorAlert = (
  message: string,
  dispatch: Dispatch<AlertAction>,
) => {
  dispatch({
    type: 'ON_ERROR_ALERT',
    payload: message,
  });

  setTimeout(() => {
    dispatch({
      type: 'ON_RESET_ALERT',
    });
  }, duration * 1000);
};

export const onSuccessAlert = (message: string) => {
  return async (dispatch: Dispatch<AlertAction>) => {
    dispatch({
      type: 'ON_SUCCESS_ALERT',
      payload: message,
    });

    setTimeout(() => {
      dispatch({
        type: 'ON_RESET_ALERT',
      });
    }, duration * 1000);
  };
};
