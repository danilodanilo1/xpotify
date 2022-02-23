import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./Reducers";
import App from "./App";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create the redux store
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
