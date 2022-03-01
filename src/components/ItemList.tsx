import React, { memo, useCallback } from "react";
import { Box, BoxProps } from "@mui/system";
import { APP_CSS } from "../constants/constants";
import { ACTION_TYPE, CheckCircleProps, TodoTextProps } from "../type/type";
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodoDispatch, useTodoState } from "../context/TodoContext";

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

const ItemList = () => {
  const state = useTodoState();
  const { items } = state;
  const dispatch = useTodoDispatch();

  const onToggleDone: (id: number) => void = useCallback((id: number) => {
    dispatch({ 
      type: ACTION_TYPE.DONE_JOB,
      id: id
    });
    // eslint-disable-next-line
  }, []);

  const onDelete: (id: number) => void = useCallback((id: number) => {
    dispatch({
      type: ACTION_TYPE.DELETE_ITEM,
      id: id
    })
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {items.map(v => (
      <FlexBox key={v.id}>
        <CheckCircle isDone={v.isDone} onClick={() => onToggleDone(v.id)}>
          { v.isDone && <AppThemeDoneIcon/> }
        </CheckCircle>
        <TodoText isDone={v.isDone}> 
          <Box sx={{ width: '100%' }}>{v.text}</Box>
          <DeleteIconBox>
            <DeleteIcon onClick={() => onDelete(v.id)}/>
          </DeleteIconBox> 
        </TodoText> 
      </FlexBox>
    ))}
    </>
  )
};

export default memo(ItemList);