import * as actions from "../actionTypes";
export default function todos(state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return state.concat([action.text]);
    default:
      return state;
  }
}
