import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
