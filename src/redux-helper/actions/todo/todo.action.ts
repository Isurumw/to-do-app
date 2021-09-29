import {Dispatch} from 'react';

import fetchTodos from './data/fetch-todos/fetch-todos';
import deleteTodo from './data/delete-todo/delete-todo';
import saveTodo from './data/save-todo/save-todo';

interface ActionFetchTodo {
  readonly type: 'ON_FETCH_TODO';
  payload: Todo[];
}

interface ActionDeleteTodo {
  readonly type: 'ON_DELETE_TODO';
  payload: boolean;
}

interface ActionSaveTodo {
  readonly type: 'ON_SAVE_TODO';
  payload: Todo;
}

interface ActionResetTodo {
  readonly type: 'ON_RESET_TODO';
}

interface ActionStateTodo {
  readonly type: 'ON_STATE_TODO';
  payload: 'deleting' | 'fetching' | 'saving' | 'none';
}

interface ActionResetAllTodos {
  readonly type: 'ON_RESET_ALL_TODOS';
}

export type TodoAction =
  | ActionFetchTodo
  | ActionDeleteTodo
  | ActionSaveTodo
  | ActionStateTodo
  | ActionResetTodo
  | ActionResetAllTodos;

export const onResetTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    dispatch({
      type: 'ON_RESET_TODO',
    });
  };
};

export const onResetAllTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    dispatch({
      type: 'ON_RESET_ALL_TODOS',
    });
  };
};

export const onFetchTodo = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'fetching',
      });

      const todos = await fetchTodos();
      dispatch({
        type: 'ON_FETCH_TODO',
        payload: todos,
      });
    } catch (e) {
      // TODO: load alert if needed
    } finally {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'none',
      });
    }
  };
};

export const onSaveTodo = (
  category: string,
  description: string,
  name?: string,
) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'saving',
      });

      const response = await saveTodo(category, description, name);
      dispatch({
        type: 'ON_SAVE_TODO',
        payload: response,
      });
    } catch (e) {
      // TODO: load alert if needed
    } finally {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'none',
      });
    }
  };
};

export const onDeleteTodo = (name: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'deleting',
      });

      await deleteTodo(name);
      dispatch({
        type: 'ON_DELETE_TODO',
        payload: true,
      });
    } catch (e) {
      // TODO: load alert if needed
    } finally {
      dispatch({
        type: 'ON_STATE_TODO',
        payload: 'none',
      });
    }
  };
};
