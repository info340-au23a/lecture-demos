import React from 'react';

import { MainContent } from './Main.js';
import { HeaderComponent } from './Header.js';

export function App(props) {
  return (
    <div>
      <HeaderComponent />
      <HeaderComponent />
      <HeaderComponent />
      <MainContent />
    </div>
  )  
}
