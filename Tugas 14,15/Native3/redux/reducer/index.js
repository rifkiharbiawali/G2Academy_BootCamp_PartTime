import {combineReducers} from 'redux';

import LoginReducer from './Login';
import DataAlbum from './Data';

const SemuaReducer = combineReducers({
  Login: LoginReducer,
  DataB: DataAlbum,
});

export default SemuaReducer;
