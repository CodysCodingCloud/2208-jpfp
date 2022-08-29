import React from "react";
import { Route, Routes } from "react-router-dom";
import { Students } from "./components/Students";
import { Campuses } from "./components/Campuses";
import Navigation from "./components/Navigation";
function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route exact path="/">
					<Route path={"students"} element={<Students />} />
					<Route path={"/campuses"} element={<Campuses />} />
					<Route index element={<h1>ACME Campuses</h1>} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
