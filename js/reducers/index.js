import {combineReducers} from "redux";
import user from "./userReducer";
import categories from "./categoriesReducer";
import notes from "./notesReducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  user,
  notes,
  categories,
  form: formReducer,
});

export default rootReducer;
