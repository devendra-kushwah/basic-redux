// import { createStore, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

// const store = createStore(rootReducer);


const store = configureStore({ reducer: rootReducer });

// console.log(store.getState());
export default store;
