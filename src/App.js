import React from 'react';

import { Global, css } from '@emotion/core'
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            font-size: 14px;
          }
        `}
      />
        <HomePage />
      
    </div>
  );
}

export default App;
