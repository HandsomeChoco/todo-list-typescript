import { Box, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { appThemeColor, white } from "../constants/constants";

const date = new Date();
const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };

const boxSx = { 
  display: 'flex',
  justifyContent: 'space-between',
};

const typoSx = { 
  fontFamily: 'SUIT-Medium', 
  display: 'flex', 
  flexFlow: 'rows no-wrap', 
  alignItems: 'center' 
};

const iconButtonSx = { 
  backgroundColor: appThemeColor, 
  color: white, 
  width: 70, 
  height: 70 
};

const iconSx = { fontSize: 35 };
const remainTaskSx = { color: appThemeColor };

function PrintDate() {
  const today = date.toLocaleString('ko-kr', options);

  return(
    <Stack>
      <Box sx={boxSx}>
        <Typography variant="h3" sx={typoSx}>
          <strong>
            {today}
          </strong>
        </Typography>
        <IconButton sx={iconButtonSx}>
          <AddIcon sx={iconSx}/>
        </IconButton>
      </Box>
      <Box>
        <Typography sx={remainTaskSx}>
          3 tasks remain
        </Typography>
      </Box>
    </Stack>
      
  )
}

export default PrintDate;