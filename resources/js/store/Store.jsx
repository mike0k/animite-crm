import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rootReducer from './Reducers';

const Store = configureStore({
    reducer: combineReducers(rootReducer),
});
export default Store;
