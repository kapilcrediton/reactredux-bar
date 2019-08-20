import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(thunk)
  )
);

if (process.env.NODE_ENV === 'development') {
  store.subscribe(() => console.log(store.getState()));
}

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'DECREMENT' });

ReactDOM.render(
  <Provider store={store}>
    <App foo="bar" />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
