import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { appThemeColor } from '../constants/constants';

interface GlobalThemeProps {
  children: React.ReactNode
}

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

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