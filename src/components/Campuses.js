import React from "react";
import { CampusPreview } from "./CampusPreview";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampuses } from "../store/campusSlice";

export function Campuses() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		console.log("Campus list");
		dispatch(fetchCampuses());
	}, []);

	let campusesList = useSelector((state) => state.campusList);
	console.log("list?", campusesList);

	return (
		<div className="campus-List">
			<h1>Our Campuses</h1>
			{campusesList &&
				campusesList.map((campus) => (
					<CampusPreview key={campus.id} campus={campus} />
				))}
		</div>
	);
}
