import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { STANDARD } from '../constants/constants';

interface AppContainerProps {
  children: React.ReactNode
}

const ResponsivePaddingContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      paddingTop: STANDARD * 3, // 24
      paddingLeft: STANDARD * 4, // 32
      paddingRight: STANDARD * 4, // 32
      paddingBottom: STANDARD * 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: STANDARD * 8, // 64
      paddingLeft: STANDARD * 9, // 72
      paddingRight: STANDARD * 9, // 72
      paddingBottom: STANDARD * 0
    }
  }
});

const ResponsivePaddingBox = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      paddingTop: STANDARD * 4, // 24
      paddingLeft: STANDARD * 4, // 32
      paddingRight: STANDARD * 4, // 32
      paddingBottom: STANDARD * 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: STANDARD * 7, // 56
      paddingLeft: STANDARD * 7, // 56
      paddingRight: STANDARD * 7, // 56
      paddingBottom: STANDARD * 0
    }
  }
});

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <React.Fragment>
      <ResponsivePaddingContainer maxWidth="md" disableGutters>
        <ResponsivePaddingBox 
          sx={{
            bgcolor: '#ffffff',
            height: '100%',
            borderTopLeftRadius: STANDARD * 4, 
            borderTopRightRadius: STANDARD * 4,
          }}
        >
          { children }
        </ResponsivePaddingBox>
      </ResponsivePaddingContainer>
    </React.Fragment>
  );
}
