import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { standard } from '../constants/constants';
interface AppContainerProps {
  children: React.ReactNode
}

const ResponsivePaddingContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      paddingTop: standard * 3, // 24
      paddingLeft: standard * 4, // 32
      paddingRight: standard * 4, // 32
      paddingBottom: standard * 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: standard * 8, // 64
      paddingLeft: standard * 9, // 72
      paddingRight: standard * 9, // 72
      paddingBottom: standard * 0
    }
  }
});

const ResponsivePaddingBox = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      paddingTop: standard * 4, // 24
      paddingLeft: standard * 4, // 32
      paddingRight: standard * 4, // 32
      paddingBottom: standard * 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: standard * 7, // 56
      paddingLeft: standard * 7, // 56
      paddingRight: standard * 7, // 56
      paddingBottom: standard * 0
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
            borderTopLeftRadius: standard * 4, 
            borderTopRightRadius: standard * 4,
          }}
        >
          { children }
        </ResponsivePaddingBox>
      </ResponsivePaddingContainer>
    </React.Fragment>
  );
}
