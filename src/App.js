import React from 'react';
// import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
import Home from './components/Home'
import {Button} from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">START React</Button>
          <Home/>
      </header>
    </div>
  );
}

export default App;
