import { Typography } from "@mui/material";

const date = new Date();
// Request a weekday along with a long date
const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function PrintDate() {
  const today = date.toLocaleString('ko-kr', options);
  const currentTime = date.toLocaleTimeString('ko-kr');
  return(
    <Typography variant="h2" sx={{ fontFamily: 'SUIT-Medium' }}>
        {today}, <br></br> {currentTime}
    </Typography>
  )
}

export default PrintDate;