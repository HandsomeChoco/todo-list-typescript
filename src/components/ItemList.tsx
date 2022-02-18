import React, { memo } from "react";
import { Box, BoxProps } from "@mui/system";
import { APP_CSS } from "../constants/constants";
import { CheckCircleProps, ItemListProps, TodoTextProps } from "../type/type";
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';

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
  justifyContent: 'space-between',
  color: isDone ? grey[500] : grey[900],
  textDecoration: isDone ? 'line-through' : 'none',
  paddingLeft: APP_CSS.STANDARD,
}));

const DeleteIconBox = styled(Box)<BoxProps>(({ theme }) => ({
  color: grey[200],
  ":hover": {
    color: red[200],
    cursor: 'pointer' 
  }
}));

const ItemList: React.FunctionComponent<ItemListProps> = ({ id, isDone, beginAt, text, onToggleDone, onDelete }) => {
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
};

export default memo(ItemList);