
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

ReactDOM.render(
  <App />, //what to render
  document.querySelector('#app'), // where to render
  function(){console.log('I have rendered')} //After rendering
);