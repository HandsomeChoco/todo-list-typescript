import React from 'react';
import './App.css';
import GlobalThemeOverride from './components/GlobalThemeOverride';
import SimpleContainer from './components/SimpleContainer';

function App() {
  return (
    <GlobalThemeOverride>
      <SimpleContainer/>
    </GlobalThemeOverride>
    
  );
}

export default App;
