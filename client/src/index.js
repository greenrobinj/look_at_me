import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
document.getElementById('root'));
  registerServiceWorker();
<Provider>
<Router>
  <App />
</Router>, 
</Provider>
