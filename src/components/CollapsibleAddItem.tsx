import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { memo, useCallback } from "react";
import { APP_CSS, date } from "../constants/constants";
import { useTodoDispatch, useTodoId, useTodoIsOpen, useTodoSetText, useTodoText } from "../context/TodoContext";
import { ACTION_TYPE, CollapsibleAddItemProps } from "../type/type";

const CollapsibleAddItem: React.FunctionComponent<CollapsibleAddItemProps> = () => {
  const isOpen = useTodoIsOpen();
  const dispatch = useTodoDispatch();
  const text = useTodoText();
  const setText = useTodoSetText();
  const id = useTodoId();

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
    <Box
      component="form"
      autoComplete="off"
      sx={{ 
        paddingTop: isOpen ? (APP_CSS.STANDARD / 4) : 0, 
        paddingBottom: isOpen ? (APP_CSS.STANDARD / 4) : 0,
        transition: APP_CSS.TRANSITION_TIME,
        height: isOpen ? '1fr' : 0,
        overflowY: 'hidden'
      }}
      onSubmit={onSubmit}
    >
      <TextField 
        label="할 일" 
        variant="outlined" 
        value={text}
        sx={{ 
          width: '100%', 
        }}
        onChange={onChange} 
      />
    </Box>
  );
}

export default memo(CollapsibleAddItem);