import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import evadbFormsReducer from '../store/reducers/evadbForms';
import evadbQueryReducer from '../store/reducers/evadbQuery';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  evadbForms: evadbFormsReducer,
  evadbQuery: evadbQueryReducer
});

const store = createStore( 
  rootReducer, 
  composeEnhancers( 
    applyMiddleware( thunk )
  )
)

store.subscribe( () => console.log("Your store subscription") )

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    app,
    document.getElementById('root'),
  )
})

//document.body.appendChild(document.createElement('div'))