import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import studentReducer from "./studentSlice";
import campusReducer from "./campusSlice";
import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";

export default configureStore({
	reducer: {
		campus: campusReducer,
		student: studentReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loggerMiddleware),
	// return createStore(########, applyMiddleware(thunk));
});
