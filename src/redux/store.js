import { createStore, applyMiddleware } from "redux";
import Rootreducer from "./reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, logger);

const store = createStore(Rootreducer, middleware);

export default store;
