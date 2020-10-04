import {createStore} from 'redux';
import SemuaReducer from '../reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import store from './asyncStorage';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, SemuaReducer);

const store = createStore(persistedReducer);
const persistS = persistStore(store);

export {persistS, store};
