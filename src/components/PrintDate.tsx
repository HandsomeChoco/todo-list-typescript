import { Box, Stack, SxProps, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { APP_CSS, REG_EXP_WHAT_DATE } from "../constants/constants";
import { useLayoutEffect, useMemo, useState } from "react";
import { formatTodayYYYYMMDD, getHoliDaysByYearMonth } from "../utils/date";
import { formatDay } from "../utils/date";
import { red } from "@mui/material/colors";
import { date } from "../constants/constants";
import { Holidays } from "../type/type";

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
  backgroundColor: APP_CSS.APP_THEME_COLOR, 
  color: APP_CSS.WHITE, 
  width: 60,
  height: 60 
};

const iconSx: SxProps = { fontSize: 35 };
const remainTaskSx: SxProps = { color: APP_CSS.APP_THEME_COLOR };

const [month, day, whatDate]: string[] = date.toLocaleString('ko-kr', options).split(' ');

function PrintDate(): JSX.Element {
  const [holidays, setHolidays] = useState<Holidays[]>([]);
 
  const redDateToRedColor = (): React.CSSProperties => {
    const todayDate: string = whatDate.replace(REG_EXP_WHAT_DATE, '');
    const redColor: React.CSSProperties = { color: red[400] };
   
    // 주말
    if (todayDate === '토' || todayDate === '일') {
      return redColor;
    }
    
    // 평일
    if (findToday) {
      return redColor;
    }
    return { };
  };

  const findToday = useMemo(() => {
    return holidays.find(v => v.locdate === Number(formatTodayYYYYMMDD()));
  }, [holidays]);

  useLayoutEffect(() => {
    getHoliDaysByYearMonth().then(res => {
      const items: Holidays[] = res.data.response.body.items.item;
      setHolidays(holidays.concat(items));
    });
  }, []);

  return(
    <Stack>
      <Box sx={boxSx}>
        <Typography variant="h3" sx={typoSx}>
          <strong>
            <span> { month } { day }</span>
            <span>
              ,
              <span style={redDateToRedColor()}>
              &nbsp; {formatDay(whatDate) }
              </span>
            </span>
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