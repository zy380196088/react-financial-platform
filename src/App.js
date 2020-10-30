import React from 'react';
import ReactDom from 'react-dom';
import store from './src/store';
import { Provider } from 'react-redux';

import {Button} from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">START React</Button>
      </header>
    </div>
  );
}

export default App;
