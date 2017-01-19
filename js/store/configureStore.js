import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import {autoRehydrate} from 'redux-persist'

export default function configureStore(initialStore) {
  return createStore(
    rootReducer,
    initialStore,
    compose(
      applyMiddleware(thunk),
      // autoRehydrate()
    ));
}

