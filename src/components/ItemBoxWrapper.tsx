import React, { memo, useCallback } from "react";
import { Box, BoxProps } from "@mui/system";
import { APP_CSS } from "../constants/constants";
import { ACTION_TYPE, CheckCircleProps, ItemBoxProps, ItemListProps, TodoTextProps } from "../type/type";
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoDispatch, useTodoIsOpen, useTodoSetIsOpen, useTodoState } from "../context/TodoContext";

const FlexBox = styled(Box)<BoxProps>(({ theme }) => ({
  transition: APP_CSS.TRANSITION_TIME,
  display: 'flex',
  alignItems: 'center',
  fontSize: APP_CSS.STANDARD * 4
}));

const CheckCircle = styled(Box)<CheckCircleProps>(({ theme, isDone }) => ({
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: '100%',
  border: isDone ? 'none' : `1px solid ${grey[400]}`
}));

const AppThemeDoneIcon = styled(DoneIcon)(({ theme }) => ({
  color: APP_CSS.APP_THEME_COLOR,
  transition: APP_CSS.TRANSITION_TIME
}));

const TodoText = styled(Box)<TodoTextProps>(({ theme, isDone }) => ({
  display: 'flex',
  width: '100%',
  color: isDone ? grey[500] : grey[900],
  textDecoration: isDone ? 'line-through' : 'underline',
  paddingLeft: APP_CSS.STANDARD
}));

const DeleteIconBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: grey[200],
  ":hover": {
    color: red[200],
    cursor: 'pointer' 
  }
}));

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


const ItemBoxWrapper: React.FunctionComponent<any> = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  
  const isOpen = useTodoIsOpen();
  const setIsOpen = useTodoSetIsOpen();

  const { items } = state;
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
    <ItemBox isOpen={isOpen}>
      {items.map(v => (
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
  )
}

const ItemList: React.FunctionComponent<ItemListProps> = memo(({ id, isDone, beginAt, text, onToggleDone, onDelete }) => {
  return (
    <FlexBox>
      <CheckCircle isDone={isDone} onClick={() => onToggleDone(id)}>
        { isDone && <AppThemeDoneIcon/> }
      </CheckCircle>
      <TodoText isDone={isDone}> 
        <Box sx={{ width: '100%' }}>{text}</Box>
        <DeleteIconBox>
          <DeleteIcon onClick={() => onDelete(id)}/>
        </DeleteIconBox> 
      </TodoText> 
    </FlexBox>
  )
});

export default memo(ItemBoxWrapper);