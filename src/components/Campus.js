import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampusData } from "../store/campusSlice";
import { useParams } from "react-router-dom";
import { StudentTable } from "./StudentTable";
import { EditCampus } from "./EditCampus";
export function Campus() {
	let { id } = useParams();
	const [editToggle, setEditToggle] = React.useState(false);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchCampusData(id));
	}, []);
	const toggleEditButton = () => {
		setEditToggle(!editToggle);
	};
	let campusData = useSelector((state) => state.campus.campusData);
	return (
		<div className="campusItem">
			{campusData && (
				<>
					{editToggle ? (
						<EditCampus
							toggleEditButton={toggleEditButton}
							campusData={campusData}
						/>
					) : (
						<>
							{" "}
							<h3>{campusData.name}</h3>
							<img src={campusData.imageUrl} alt={`${campusData.name} image`} />
							<p>{campusData.description}</p>
							<button onClick={toggleEditButton}>Modify Campus</button>
							<StudentTable studentList={campusData.students} />
						</>
					)}
				</>
			)}
		</div>
	);
}
