import { useQuery } from "@tanstack/react-query";
import loadingImage from "../../assets/loading.gif";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Assignmentcard from "./Assignmentcard";

const Assignment = () => {
	const [newData , setNewData] = useState([])
	const [newData2 , setNewData2] = useState([])

	const { data, isLoading } = useQuery({
		queryKey: ["assignment"],
		queryFn: async () => {
			const res = await axios.get("http://localhost:5100/assignments");
			setNewData(res.data)
			setNewData2(res.data)
			return res.data;
		},
	});

	if (isLoading) {
		return (
			<div className="h-screen w-screen flex justify-center items-center -mt-10">
				<img src={loadingImage} alt="" />
			</div>
		);
	}
	console.log(newData);
	const handlechange = (e) => {


		const selectElement = e.target;
		const selectedOption =
			selectElement.options[selectElement.selectedIndex];
		const filterValue = selectedOption.value;


		const filteredData = newData2.filter(
			(item) => item.difficulty == filterValue
		);
			setNewData(filteredData);
			console.log(filteredData.length);

			if(filteredData.length == 0){
				setNewData(newData2)
			}
			else{
				setNewData(filteredData)
			}

	};

	return (
		<div>
			<div className="flex max-w-md m-5 mb-10  gap-2 mx-auto justify-center items-center">
				<p className="text-xl ">
					Filter Assignment with difficulty lever
				</p>
				<select
					onChange={handlechange}
					name="Difficulty"
					className="select select-ghost  input-bordered"
					id=""
				>
					<option className="text-lg " value="All">
						All
					</option>
					<option className="text-lg " value="easy">
						Easy
					</option>
					<option className="text-lg " value="medium">
						Medeum
					</option>
					<option className="text-lg " value="hard">
						Hard
					</option>
				</select>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{newData.map((item) => (
					<Assignmentcard key={item._id} item={item}></Assignmentcard>
				))}
			</div>
		</div>
	);
};

export default Assignment;
