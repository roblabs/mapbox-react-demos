import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  
<nav>
  <a class='flex-parent-inline btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3 is-active' href='#'>
    <svg class='icon mr3'><use xlinkHref='#icon-home'/></svg> Home
  </a>
  <a class='flex-parent-inline btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3' href='#'>
    <svg class='icon mr3'><use xlinkHref='#icon-user'/></svg> Account
  </a>
  <a class='flex-parent-inline btn color-blue color-white-on-active bg-transparent bg-darken10-on-hover bg-blue-on-active txt-s ml3' href='#'>
    <svg class='icon mr3'><use xlinkHref='#icon-logout'/></svg> Logout
  </a>
</nav>
,
  document.getElementById('root')
);

ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')));
registerServiceWorker();
