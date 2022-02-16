import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { memo } from "react";
import { APP_CSS } from "../constants/constants";
import { CollapsibleAddItemProps } from "../type/type";

const CollapsibleAddItem: React.FunctionComponent<CollapsibleAddItemProps> = ({ text, isOpen, onSubmit, onChange }) => {
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