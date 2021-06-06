import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./store";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(todos, ["Use Redux"]);

store.dispatch({
  type: "ADD_TODO",
  text: "Read the docs",
});

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
