import { createStore } from "redux";
import todos from "./reducer/rootReducer";

const store = createStore(todos);

export default store;
