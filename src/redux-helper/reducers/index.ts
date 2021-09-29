import {combineReducers} from 'redux';

import AuthReducer from './auth.reducer';
import UserReducer from './user.reducer';
import TodoReducer from './todo.reducer';
import AlertReducer from './alert.reducer';

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  userReducer: UserReducer,
  todoReducer: TodoReducer,
  alertReducer: AlertReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
