import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PrintDate from './PrintDate';

interface AppContainerProps {
  children: React.ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <React.Fragment>
      <Container maxWidth="md" disableGutters>
        <Box 
          sx={{ 
            bgcolor: '#ffffff',
            height: '100%',
            paddingTop: 4,
            paddingLeft: 3,
            paddingRight: 3,
            borderTopLeftRadius: 32, 
            borderTopRightRadius: 32,
          }}
        >
          <PrintDate/>
          { children }
        </Box>
      </Container>
    </React.Fragment>
  );
}
