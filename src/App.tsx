import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import Layout from './components/Layout';
import Header from './components/Header';
import CollapsibleAddItem from './components/CollapsibleAddItem';

import ItemBoxWrapper from './components/ItemBoxWrapper';
import Box from '@mui/material/Box/Box';

function App() {
  return (
    <GlobalThemeOverride>
      <Layout>
        <Box>
          <Header />
          <CollapsibleAddItem 
          />
        </Box>
        
        <ItemBoxWrapper/>
      </Layout>
    </GlobalThemeOverride>
  );
}

export default App;
