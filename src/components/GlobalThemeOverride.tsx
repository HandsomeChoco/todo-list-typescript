import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { appThemeColor } from '../constants/constants';

interface GlobalThemeProps {
  children: React.ReactNode
}
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100vh',
          maxHeight: '1200px',
          backgroundColor: appThemeColor,
        }
      }
    },
  }
});

function GlobalThemeOverride({ children }: GlobalThemeProps) {
  return(
    <>
      <CssBaseline />
        <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </>
    
  )
}

export default GlobalThemeOverride;