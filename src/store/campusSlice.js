import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const campusSlice = createSlice({
	name: "campusList",
	initialState: {},
	reducers: {
		getCampusList: (state, action) => {
			state.campusList = action.payload;
			return state;
		},
		addCampus: (state, action) => {
			state.campusList.push(action.payload);
			return state;
		},
		getCampus: (state, action) => {
			state.campusData = action.payload;
			return state;
		},
	},
});
export default campusSlice.reducer;
export const { getCampusList, addCampus, getCampus } = campusSlice.actions;
export const fetchCampuses = () => async (dispatch) => {
	const { data: campusList } = await axios.get("/api/campuses");
	dispatch(getCampusList(campusList));
};

export const fetchCampusData = (campusId) => async (dispatch) => {
	const { data: campusData } = await axios.get(`/api/campuses/${campusId}`);
	console.log("campusData", campusData);
	dispatch(getCampus(campusData));
};
