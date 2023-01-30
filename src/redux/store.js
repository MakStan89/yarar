import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mapsReducer from './reducers/maps-slice';

const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const composeEnhancers = composeFunc(applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    mapsState: mapsReducer,
  },
  initialState,
  composeEnhancers
});

export default store;
