import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import Layout from './components/Layout';
import Header from './components/Header';
import CollapsibleAddItem from './components/CollapsibleAddItem';
import { ItemBoxProps } from './type/type';

import ItemList from './components/ItemList';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/material';
import { useTodoIsOpenContext } from './context/TodoContext';

const ItemBox = styled(Box)<ItemBoxProps>(({ theme, isOpen }) => {
  return {
    marginTop: '24px',
    overflowY: 'auto',
    [theme.breakpoints.down("sm")]: {
      height: isOpen ? 'calc(100vh - 24px - 32px - 163px - 24px)' : 'calc(100vh - 24px - 32px - 75px - 24px)' ,
    },
    [theme.breakpoints.up("sm")]: {
      height: isOpen ? 'calc(100vh - 64px - 56px - 165px - 24px)' : 'calc(100vh - 64px - 56px - 75px - 24px)',
    }
  };
});

function ItemBoxContainer() {
  const isOpen = useTodoIsOpenContext();
  console.log(isOpen)
  return (
    <ItemBox isOpen={isOpen}>
      <ItemList/>    
    </ItemBox>
  )
}
function App() {

  return (
    <GlobalThemeOverride>
      <Layout>
        <Box>
          <Header/>
          <CollapsibleAddItem />
        </Box>

        <ItemBoxContainer/>
      </Layout>
    </GlobalThemeOverride>
  );
}

export default App;
