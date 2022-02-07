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
          maxHeight: '1200px',
          backgroundColor: '#6076e8',
          paddingTop: 24,
          paddingLeft: 32, 
          paddingRight: 32, 
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