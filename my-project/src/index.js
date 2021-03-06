import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.sass';
import App from './App';
import {unregister} from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
unregister();
