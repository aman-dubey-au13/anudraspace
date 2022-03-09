import { combineReducers } from "redux";
import { dataReducer } from "./productsReducer";
const reducers = combineReducers({
  allData: dataReducer,
});

export default reducers;