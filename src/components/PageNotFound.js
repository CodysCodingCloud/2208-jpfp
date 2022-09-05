import React from "react";
import { useLocation } from "react-router-dom";

export function PageNotFound() {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<main>
			<h1>PageNotFound</h1>
			<p>
				<strong>{pathname}</strong> - is not a valid page
			</p>
		</main>
	);
}
