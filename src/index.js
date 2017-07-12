import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

import{HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
    <Router>
        <Provider store ={store}>
            <Route path="/" component={App} />        
        </Provider>
    </Router>
, document.getElementById('root'));
