import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const studentSlice = createSlice({
	name: "studentList",
	initialState: {},
	reducers: {
		getStudents: (state, action) => {
			state.studentList = action.payload;
			return state;
		},
		addStudent: (state, action) => {
			state.push(action.payload);
			return state;
		},
		getStudentProfile: (state, action) => {
			state.currentStudentProfile = action.payload;
			return state;
		},
	},
});
export default studentSlice.reducer;
export const { getStudents, addStudent, getStudentProfile } =
	studentSlice.actions;
export const fetchStudents = () => async (dispatch) => {
	const { data: students } = await axios.get("/api/students");
	console.log(students);
	dispatch(getStudents(students));
};
export const fetchStudentProfile = (studentId) => async (dispatch) => {
	const { data: studentProfile } = await axios.get(
		`/api/students/${studentId}`
	);
	dispatch(getStudentProfile(studentProfile));
};
