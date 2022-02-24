import React, { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import Layout from './components/Layout';
import Header from './components/Header';
import CollapsibleAddItem from './components/CollapsibleAddItem';
import { ACTION_TYPE, ItemBoxProps } from './type/type';
import { date } from './constants/constants';
import ItemList from './components/ItemBox';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/material';
import { useTodoDispatch, useTodoState } from './context/TodoContext';

function App() {
  const [text, setText] = useState<string>('');
  const id = useRef<number>(0);
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  
  const remainTasks = useMemo(() => state.items.filter(v => v.isDone === false), [state]).length;

  const handleOpenInput = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined = (e) => setText(e.target.value);
  const onSubmit: React.FormEventHandler<HTMLFormElement> | undefined = useCallback((e) => {
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
  }, [text]);

  return (
    <GlobalThemeOverride>
      <Layout>
        <Box>
          <Header 
            isOpen={isOpen} 
            handleOpenInput={handleOpenInput} 
            remainTasks={remainTasks}
          />
          <CollapsibleAddItem 
            isOpen={isOpen} 
            text={text} 
            onChange={onChange} 
            onSubmit={onSubmit}
          />
        </Box>
        
        <ItemBox isOpen={isOpen}/>
      </Layout>
    </GlobalThemeOverride>
  );
}

export default App;
