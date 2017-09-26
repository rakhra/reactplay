import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import calculatorReducers from './reducers/calculatorReducers'
import App from "./components/App";

const app = document.getElementById('app')

const loggerMiddleware = createLogger()


const store = createStore(calculatorReducers, {identifiers:[]}, 
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ));


import {fetchPosts} from './actions/calculatorActions';




ReactDOM.render(
	<Provider store={store}>
		<App classes={{}}/>
	</Provider>
	, app);

