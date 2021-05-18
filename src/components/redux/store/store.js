import {createStore, applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import {persistStore} from 'redux-persist';

const store = createStore(rootReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export {store, persistor};
