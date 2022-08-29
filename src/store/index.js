import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import studentReducer from "./studentSlice";
import campusReducer from "./campusSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
	reducer: {
		campusList: campusReducer,

		studentList: studentReducer,
	},
	// return createStore(########, applyMiddleware(thunk));
});
