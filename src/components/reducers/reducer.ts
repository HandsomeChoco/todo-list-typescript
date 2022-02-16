import { Action, State } from "../../type/type";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state, 
        items: state.items.concat({ 
          id: action.id, 
          isDone: action.isDone, 
          beginAt: action.beginAt, 
          text: action.text 
        })
      };
    case 'DELETE_ITEM':
      return {
        ...state, items: state.items.filter(v => v.id !== action.id)
      };
    case 'DONE_JOB':
      return { 
        ...state, items: state.items.map(v => v.id === action.id ? { ...v, isDone: !v.isDone } : v)
      }
    default:
      throw new Error(`예상치 못한 액션 타입: ${action.type}`);
  }
};