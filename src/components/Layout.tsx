import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { APP_CSS } from '../constants/constants';
import { LayoutProps } from '../type/type';

const ResponsivePaddingContainer = styled(Container)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      paddingTop: APP_CSS.STANDARD * 3, // 24
      paddingLeft: APP_CSS.STANDARD * 4, // 32
      paddingRight: APP_CSS.STANDARD * 4, // 32
      paddingBottom: APP_CSS.STANDARD * 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: APP_CSS.STANDARD * 8, // 64
      paddingLeft: APP_CSS.STANDARD * 9, // 72
      paddingRight: APP_CSS.STANDARD * 9, // 72
      paddingBottom: APP_CSS.STANDARD * 0
    }
  }
});

const ResponsivePaddingBox = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.down("sm")]: {
      height: 'calc(100vh - 24px)',
      paddingTop: APP_CSS.STANDARD * 4, // 24
      paddingLeft: APP_CSS.STANDARD * 4, // 32
      paddingRight: APP_CSS.STANDARD * 4, // 32
      paddingBottom: APP_CSS.STANDARD * 0
    },
    [theme.breakpoints.up("sm")]: {
      height: 'calc(100vh - 64px)',
      paddingTop: APP_CSS.STANDARD * 7, // 56
      paddingLeft: APP_CSS.STANDARD * 7, // 56
      paddingRight: APP_CSS.STANDARD * 7, // 56
      paddingBottom: APP_CSS.STANDARD * 0
    }
  }
});

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <ResponsivePaddingContainer maxWidth="md" disableGutters>
        <ResponsivePaddingBox 
          sx={{
            bgcolor: '#ffffff',
            borderTopLeftRadius: APP_CSS.STANDARD * 4, 
            borderTopRightRadius: APP_CSS.STANDARD * 4,
          }}
        >
          { children }
        </ResponsivePaddingBox>
      </ResponsivePaddingContainer>
    </React.Fragment>
  );
}