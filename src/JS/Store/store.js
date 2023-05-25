// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers';
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
// const store = createStore (rootReducer)
// window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
export default store;
