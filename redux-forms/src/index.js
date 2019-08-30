import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import cfgStore from './store'
import {Provider} from 'react-redux'

const store = cfgStore()

ReactDOM.render(
    <Provider store={store}>
        <div className="container">
            <div className="row">
                <App/>
            </div>
        </div>
    </Provider>
    , document.getElementById('root'));

