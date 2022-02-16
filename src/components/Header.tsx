import { useLayoutEffect, useMemo, useState, memo } from "react";

import { Box, Stack, styled, SxProps } from "@mui/material";
import { red } from "@mui/material/colors";
import Typography, { TypographyProps } from "@mui/material/Typography"
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import { APP_CSS, REG_EXP_WHAT_DATE } from "../constants/constants";
import { formatTodayYYYYMMDD, getHoliDaysByYearMonth } from "../utils/date";
import { formatDay } from "../utils/date";
import { date } from "../constants/constants";
import { Holidays } from "../type/type";

const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'long', day: 'numeric' };

const boxSx: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
};

const iconSx: SxProps = { fontSize: 35 };

const [month, day, whatDate]: string[] = date.toLocaleString('ko-kr', options).split(' ');

const ShowDate = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontFamily: 'SUIT-Medium', 
  display: 'flex', 
  flexFlow: 'rows no-wrap', 
  alignItems: 'center',
}));

const RemainTasks = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: APP_CSS.APP_THEME_COLOR
}));

const AddItemIconButton = memo(styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: APP_CSS.APP_THEME_COLOR, 
  color: APP_CSS.WHITE, 
  width: APP_CSS.STANDARD * 6 + 2,
  height: APP_CSS.STANDARD * 6 + 2,
  transition: APP_CSS.TRANSITION_TIME
})));

function Header({ isOpen, handleOpenInput, remainTasks }: any): JSX.Element {
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
    // eslint-disable-next-line
  }, []);

  return(
    <Stack>
      <Box sx={boxSx}>
        <ShowDate variant="h3">
          <strong>
            <span> { month } { day }</span>
            <span>
              ,
              <span style={redDateToRedColor()}>
              &nbsp; {formatDay(whatDate) }
              </span>
            </span>
          </strong>
        </ShowDate>
        <AddItemIconButton onClick={handleOpenInput} 
          disableRipple
          sx={{  
            transform: isOpen ? 'rotate(45deg)': 'none',
            background: isOpen ? red[500] : APP_CSS.APP_THEME_COLOR,
          }}
        >
          <AddIcon sx={iconSx}/>
        </AddItemIconButton>
      </Box>
      <Box>
        <RemainTasks>
          <strong> {remainTasks} tasks remain</strong>
        </RemainTasks>
      </Box>
    </Stack>
      
  )
}

export default memo(Header);