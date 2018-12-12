import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers";

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger))
);
