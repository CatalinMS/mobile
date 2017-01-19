import * as actionTypes from "../constants/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATION_SUCCESS:
      return action.user;
    default:
      return state
  }
}

