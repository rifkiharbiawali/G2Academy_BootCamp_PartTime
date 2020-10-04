import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import firebase from "./firebase/fb";
//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AllReducers from "./redux";
import thunk from "redux-thunk";

const store = createStore(AllReducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* {console.log("tes", firebase)} */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
