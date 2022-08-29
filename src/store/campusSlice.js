import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const campusSlice = createSlice({
	name: "campusList",
	initialState: [],
	reducers: {
		getCampus: (state, action) => {
			return (state = action.payload);
		},
		addCampus: (state, action) => {
			state.push(action.payload);
			return state;
		},
	},
});
export default campusSlice.reducer;
export const { getCampus, addCampus } = campusSlice.actions;
export const fetchCampuses = () => async (dispatch) => {
	const { data: campusList } = await axios.get("./api/campuses");
	console.log(campusList);
	dispatch(getCampus(campusList));
};
