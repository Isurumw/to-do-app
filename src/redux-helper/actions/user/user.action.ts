import {Dispatch} from 'react';

import fetchUser from './data/fetch-user';

interface ActionUser {
  readonly type: 'ON_USER';
  payload: User;
}

interface ActionErrorUser {
  readonly type: 'ON_ERROR_USER';
  payload: string;
}

interface ActionResetUser {
  readonly type: 'ON_RESET_USER';
}

export type UserAction = ActionUser | ActionErrorUser | ActionResetUser;

export const onResetUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: 'ON_RESET_USER',
    });
  };
};

export const onUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const user = await fetchUser();
      dispatch({
        type: 'ON_USER',
        payload: user,
      });
    } catch (e) {
      dispatch({
        type: 'ON_ERROR_USER',
        payload: 'Something went wrong with server.',
      });
    }
  };
};
