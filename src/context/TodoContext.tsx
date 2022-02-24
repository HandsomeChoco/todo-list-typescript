import React, { createContext, useReducer, Dispatch, useContext, useState, SetStateAction } from 'react';
import { reducer } from '../components/reducers/reducer';
import { ERROR_MSG } from '../constants/constants';
import { Action, State, TodoProviderProps } from '../type/type';

const initialState: State = { items: [] };
const TodoStateContext = createContext<null|State>(null);
const TodoDispatchContext = createContext<null|Dispatch<Action>>(null);
const TodoIsOpenContext = createContext<undefined|boolean>(undefined);
const TodoSetIsOpenContext = createContext<null|Dispatch<boolean>>(null);

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIsOpenContext.Provider value={isOpen}>
          <TodoSetIsOpenContext.Provider value={setIsOpen}>
            { children }
          </TodoSetIsOpenContext.Provider>
        </TodoIsOpenContext.Provider>
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

export function useTodoIsOpen() {
  const isOpen = useContext(TodoIsOpenContext);
  return isOpen;
}

export function useTodoSetIsOpen() {
  const setIsOpen = useContext(TodoSetIsOpenContext);
  return setIsOpen;
}

export default TodoProvider;
