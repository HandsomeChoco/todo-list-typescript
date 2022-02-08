import React from 'react';
import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import AppContainer from './components/AppContainer';
import PrintDate from './components/PrintDate';

function App() {
  return (
    <GlobalThemeOverride>
      <AppContainer>
        <PrintDate/>
      </AppContainer>
    </GlobalThemeOverride>
  );
}

export default App;
