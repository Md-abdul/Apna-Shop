import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

import { reducer as ProductReducer } from "../Redux/reducer";
import { reducer as UsersReducer } from "../Redux/users/reducer";

const rootReducer = combineReducers({
  ProductReducer,
  UsersReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
