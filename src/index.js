import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/hello';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello firstName={'Jerr'} lastName={'May'} />, document.getElementById('root'));
// registerServiceWorker();
