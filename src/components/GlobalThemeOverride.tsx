import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { APP_THEME_COLOR } from '../constants/constants';

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
          backgroundColor: APP_THEME_COLOR,
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