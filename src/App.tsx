import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import Layout from './components/Layout';
import Header from './components/Header';
import CollapsibleAddItem from './components/CollapsibleAddItem';
import { ACTION_TYPE, ItemBoxProps, State } from './type/type';
import { reducer } from './components/reducers/reducer';
import { date } from './constants/constants';
import ItemList from './components/ItemList';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/material';

const initialState: State = { items: [] };

const ItemBox = styled(Box)<ItemBoxProps>(({ theme, isOpen }) => {
  return {
    marginTop: '24px',
    overflowY: 'auto', 
    [theme.breakpoints.down("sm")]: {
      height: isOpen ? 'calc(100vh - 24px - 32px - 163px - 24px)' : 'calc(100vh - 24px - 32px - 75px - 24px)' ,
    },
    [theme.breakpoints.up("sm")]: {
      height: isOpen ? 'calc(100vh - 64px - 56px - 165px - 24px)' : 'calc(100vh - 64px - 56px - 75px - 24px)',
    }
  }
});

function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const id = useRef<number>(0);
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

  const onToggleDone: (id: number) => void = useCallback((id: number) => {
    dispatch({ 
      type: ACTION_TYPE.DONE_JOB,
      id: id
    });
  }, []);

  const onDelete: (id: number) => void = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.DELETE_ITEM,
      id: id
    })
  }, []);

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
        
        <ItemBox isOpen={isOpen}>
          {state.items.map(v => (
            <ItemList 
              key={v.id} 
              id={v.id} 
              isDone={v.isDone} 
              beginAt={v.beginAt} 
              text={v.text} 
              onToggleDone={onToggleDone} 
              onDelete={onDelete}
            />
          ))}
        </ItemBox>
      </Layout>
    </GlobalThemeOverride>
  );
}

export default App;
