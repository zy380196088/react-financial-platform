import React from 'react';
// import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// import '~antd/lib/style/themes/default.less';
/*官方样式*/
/*@import '~antd/dist/antd.dark.less';*/
/*自定义覆盖样式*/
/*@import 'asset/css/custom-theme-style.less';*/
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
