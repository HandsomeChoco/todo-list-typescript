import { Box, Stack, SxProps, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { appThemeColor, white } from "../constants/constants";
import { useLayoutEffect } from "react";
import axios from "axios";

const date: Date = new Date();
const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'long', day: 'numeric' };

const boxSx: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
};

const typoSx: SxProps = {
  fontFamily: 'SUIT-Medium', 
  display: 'flex', 
  flexFlow: 'rows no-wrap', 
  alignItems: 'center'
};

const iconButtonSx: SxProps = {
  backgroundColor: appThemeColor, 
  color: white, 
  width: 60, 
  height: 60 
};

const iconSx: SxProps = { fontSize: 35 };
const remainTaskSx: SxProps = { color: appThemeColor };

function PrintDate(): JSX.Element {
  const [month, day, whatDate]: string[] = date.toLocaleString('ko-kr', options).split(' ');

  const getHolidays = async() => {
    const year = date.getFullYear();
    let month: string | number  = date.getMonth() + 1

    if (month < 10) {
      month = '0'+ month
    }

    const response = await axios.get(`http://10.10.12.53:9000/api/${year}/${month}`);
    console.log(response.data.response.body)
    return response.data.response.body;
  }

  useLayoutEffect(() => {
    getHolidays();

  }, []);

  return(
    <Stack>
      <Box sx={boxSx}>
        <Typography variant="h3" sx={typoSx}>
          <strong>
            <span> {month } { day }</span>
            <span> { whatDate }</span>
          </strong>
        </Typography>
        <IconButton sx={iconButtonSx}>
          <AddIcon sx={iconSx}/>
        </IconButton>
      </Box>
      <Box>
        <Typography sx={remainTaskSx}>
          <strong>3 tasks remain</strong>
        </Typography>
      </Box>
    </Stack>
      
  )
}

export default PrintDate;