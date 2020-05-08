import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CarReducer from './reducer/rootReducer'
import BookingReducer from './reducer/bookingReducer'
import {createStore,combineReducers} from 'redux'

import { Provider } from 'react-redux';

const Reducer = combineReducers({
  booking:BookingReducer,
  car:CarReducer
})
const store = createStore(Reducer)
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
