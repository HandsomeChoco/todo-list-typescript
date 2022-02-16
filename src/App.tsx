import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import AppContainer from './components/AppContainer';
import PrintDate from './components/PrintDate';
import CollapsibleAddItem from './components/CollapsibleAddItem';
import { ACTION_TYPE, State } from './type/type';
import { reducer } from './components/reducers/reducer';
import { date } from './constants/constants';
import ItemList from './components/ItemList';

const initialState: State = { items: [] };

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const id = useRef<number>(0);
  const remainTasks = useMemo(() => state.items.length, [state]);

  const handleOpenInput = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (e) => setText(e.target.value);
  const onSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    dispatch({ 
      type: ACTION_TYPE.ADD_ITEM, 
      id: id.current, 
      isDone: false,  
      beginAt: date.toLocaleDateString('ko-kr'), 
      text 
    });
    setText('');
    id.current += 1;
  }

  return (
    <GlobalThemeOverride>
      <AppContainer>
        <PrintDate isOpen={isOpen} handleOpenInput={handleOpenInput} remainTasks={remainTasks}/>
        <CollapsibleAddItem isOpen={isOpen} text={text} onChange={onChange} onSubmit={onSubmit}/>
        {state.items.map(v => <ItemList key={v.id} id={v.id} isDone={v.isDone} beginAt={v.beginAt} text={v.text} />)}
      </AppContainer>
    </GlobalThemeOverride>
  );
}

export default App;
