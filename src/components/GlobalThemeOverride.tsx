import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

interface GlobalThemeProps {
  children: React.ReactNode
}

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100vh',
          backgroundColor: '#6076e8'
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