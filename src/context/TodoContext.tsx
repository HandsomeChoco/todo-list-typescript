import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import { reducer } from '../components/reducers/reducer';
import { ERROR_MSG } from '../constants/constants';
import { Action, State, TodoProviderProps } from '../type/type';

const initialState: State = { items: [] };
const TodoStateContext = createContext<null|State>(null);
const TodoDispatchContext = createContext<null|Dispatch<Action>>(null);

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        { children }
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error(ERROR_MSG.STATE_CONTEXT_ERROR);
  }
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error(ERROR_MSG.DISPATCH_CONTEXT_ERROR);
  }
  return dispatch;
} 

export default TodoProvider;
