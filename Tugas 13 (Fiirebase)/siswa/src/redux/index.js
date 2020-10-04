import { combineReducers } from "redux";
import LoginReducer from "./reducer/RegisterReducer";
import DataUser from "./reducer/RegisterReducer";
// import * as Redusers from "./reducer";

// const allReducers = combineReducers({
//   login: LoginReducer,
// });

const AllReducers = combineReducers({
  LoginUserSiswa: LoginReducer,
  kirimDataUser: DataUser,
});

export default AllReducers;
