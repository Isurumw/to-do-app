import {TodoAction} from '../actions/todo/todo.action';

type TodoState = {
  todos: Todo[];
  loadingState: 'deleting' | 'fetching' | 'refreshing' | 'saving' | 'none';
  savedTodo?: Todo;
  didDelete: boolean;
  error?: string;
};

const InitialState: TodoState = {
  todos: [],
  loadingState: 'none',
  savedTodo: undefined,
  didDelete: false,
  error: undefined,
};

const TodoReducer = (state: TodoState = InitialState, action: TodoAction) => {
  switch (action.type) {
    case 'ON_FETCH_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    case 'ON_SAVE_TODO':
      return {
        ...state,
        savedTodo: action.payload,
      };
    case 'ON_DELETE_TODO':
      return {
        ...state,
        didDelete: action.payload,
      };
    case 'ON_STATE_TODO':
      return {
        ...state,
        loadingState: action.payload,
      };
    case 'ON_RESET_TODO':
      return {
        ...state,
        error: undefined,
        didDelete: false,
        savedTodo: undefined,
      };
    case 'ON_RESET_ALL_TODOS':
      return {
        ...state,
        todos: [],
        error: undefined,
        didDelete: false,
        savedTodo: undefined,
      };
    default:
      return state;
  }
};

export default TodoReducer;
