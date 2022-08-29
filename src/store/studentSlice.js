import { createSlice } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
const axios = require("axios");

const studentSlice = createSlice({
	name: "studentList",
	initialState: [],
	reducers: {
		getStudents: (state, action) => {
			return (state = action.payload);
		},
		addStudent: (state, action) => {
			state.push(action.payload);
			return state;
		},
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(loggerMiddleware),
});
export default studentSlice.reducer;
export const { getStudents, addStudent } = studentSlice.actions;
export const fetchStudents = () => async (dispatch) => {
	const { data: students } = await axios.get("./api/students");
	console.log(students);
	dispatch(getStudents(students));
};
