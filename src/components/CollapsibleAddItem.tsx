import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { memo, useCallback, useRef, useState } from "react";
import { APP_CSS, date } from "../constants/constants";
import { useTodoDispatch, useTodoIsOpenContext } from "../context/TodoContext";
import { ACTION_TYPE, CollapsibleAddItemProps } from "../type/type";

const CollapsibleAddItem = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useTodoDispatch();
  const isOpen = useTodoIsOpenContext();
  const id = useRef<number>(0);
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
    // eslint-disable-next-line
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