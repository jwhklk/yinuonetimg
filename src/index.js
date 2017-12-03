import React from 'react';
import ReactDOM from 'react-dom';
import Root from './env/root';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();