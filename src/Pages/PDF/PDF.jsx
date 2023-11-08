import React from "react";
import { useLocation } from "react-router-dom";

const PDF = () => {

    const location = useLocation()
    console.log(location);
    // console.log(item);
	return (
		<div>
			<h1>pdf viewer</h1>

			<div>
				<iframe
					src=""
					className="w-full h-screen bg-red-500"
				/>
			</div>
		</div>
	);
};

export default PDF;
