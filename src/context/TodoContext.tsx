import React, { createContext, useReducer, Dispatch, useContext, useState, SetStateAction } from 'react';
import { reducer } from '../components/reducers/reducer';
import { ERROR_MSG } from '../constants/constants';
import { Action, State, TodoProviderProps } from '../type/type';

const initialState: State = { items: [] };
const TodoStateContext = createContext<null|State>(null);
const TodoDispatchContext = createContext<null|Dispatch<Action>>(null);
const TodoIsOpenContext = createContext<null|boolean>(null);
const TodoSetOpenContext = createContext<null|Dispatch<SetStateAction<boolean>>>(null);

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIsOpenContext.Provider value={isOpen}>
          <TodoSetOpenContext.Provider value={setOpen}>
            { children }
          </TodoSetOpenContext.Provider>
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

export function useTodoIsOpenContext() {
  const isOpen = useContext(TodoIsOpenContext);
  return isOpen;
}

export function useTodoSetOpenContext() {
  const setIsOpen = useContext(TodoSetOpenContext);
  if (!setIsOpen) {
    throw new Error(ERROR_MSG.STATE_CONTEXT_ERROR);
  }
  return setIsOpen;
}

export default TodoProvider;
