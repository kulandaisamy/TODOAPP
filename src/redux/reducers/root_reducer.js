import todoReducer from "./reducer_todo";
import authreducer from "./reducer_auth";
import { combineReducers } from "redux";

export default combineReducers({ todo: todoReducer, auth: authreducer });
