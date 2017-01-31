import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/app';
import ImageForm from './components/image-form'
import GetImage from './components/get-image'
import Gallery from './components/gallery'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={GetImage}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/form" component={ImageForm}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
