import React from "react";
import { Route, Routes } from "react-router-dom";
import { Students } from "./components/Students";
import { StudentProfile } from "./components/StudentProfile";
import { Campuses } from "./components/Campuses";
import { Campus } from "./components/Campus";
import { Home } from "./components/Home";
import Navigation from "./components/Navigation";
function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/">
					<Route path={"students"}>
						<Route index element={<Students />} />
						<Route path={":id"} element={<StudentProfile />} />
					</Route>
					<Route path={"/campuses"}>
						<Route index element={<Campuses />} />
						<Route path={":id"} element={<Campus />} />
					</Route>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
