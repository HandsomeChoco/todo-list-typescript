import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            bgcolor: '#ffffff',
            height: '100%',
            p: [3, 4, 4, 0],
            borderTopLeftRadius: 16, 
            borderTopRightRadius: 16 
          }}
        > 
          1
        </Box>
      </Container>
    </React.Fragment>
  );
}
