import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducers from "../reducers/login";

const logger = createLogger();

const store = createStore(reducers, undefined, applyMiddleware(logger));

export default store;
