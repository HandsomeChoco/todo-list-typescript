import React, { createContext, useReducer, Dispatch, useContext, useState, SetStateAction, useRef, MutableRefObject } from 'react';
import { reducer } from '../components/reducers/reducer';
import { ERROR_MSG } from '../constants/constants';
import { Action, State, TodoProviderProps } from '../type/type';

const initialState: State = { items: [] };
const TodoStateContext = createContext<null|State>(null);
const TodoDispatchContext = createContext<null|Dispatch<Action>>(null);
const TodoIsOpenContext = createContext<null|boolean>(null);
const TodoSetIsOpenContext = createContext<null|Dispatch<boolean>>(null);
const TodoIdContext = createContext<null|MutableRefObject<number>>(null);
const TodoTextConext = createContext<null|string>(null);
const TodoSetTextContext = createContext<null|React.Dispatch<React.SetStateAction<string>>>(null);

function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const id = useRef<number>(0);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIsOpenContext.Provider value={isOpen}>
          <TodoSetIsOpenContext.Provider value={setIsOpen}>
            <TodoIdContext.Provider value={id}>
              <TodoTextConext.Provider value={text}>
                <TodoSetTextContext.Provider value={setText}>
                  { children }
                </TodoSetTextContext.Provider>
              </TodoTextConext.Provider>
            </TodoIdContext.Provider>
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

export function useTodoId() {
  const id = useContext(TodoIdContext);
  if (!id) {
    throw new Error(ERROR_MSG.ID_REF_ERROR);
  }
  return id;
}

export function useTodoText() {
  const text = useContext(TodoTextConext);

  if (text==='') {
    return text;
  }
  
  if (!text) {
    throw new Error(ERROR_MSG.TEXT_ERROR);
  }
  return text;
}

export function useTodoSetText() {
  const setText = useContext(TodoSetTextContext);
  if (!setText) {
    throw new Error('setText를 찾을 수 없습니다.');
  }
  return setText;
}


export default TodoProvider;
