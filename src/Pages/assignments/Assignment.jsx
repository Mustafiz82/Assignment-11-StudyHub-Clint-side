import { useQuery } from "@tanstack/react-query";
import loadingImage from "../../assets/loading.gif";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Assignmentcard from "./Assignmentcard";

const Assignment = () => {
	const [newData, setNewData] = useState([]);
	const [newData2, setNewData2] = useState([]);
	const [countData, setCountData] = useState({});
	const [currentPage , setCurrentPage] = useState(0)

	useEffect(() => {
		axios.get("http://localhost:5100/AssignmentCount").then((res) => {
			setCountData(res.data);
		});
	}, []);

	const { count } = countData;

	const itemPerPage = 6;
	const numberOfPage = Math.ceil(count / itemPerPage);

	const pages = [];
	for (let i = 0; i < numberOfPage; i++) {
		pages.push(i);
	}

	const btnPrevious = () => {
		
		if(currentPage > 0){
			setCurrentPage(currentPage - 1)
			
		}
		console.log(currentPage);
		
	}
	const btnNext = () => {
		if(currentPage < (numberOfPage - 1)){
			setCurrentPage(currentPage + 1)
			
		}
		console.log(currentPage);
	}	

    useEffect(() => {
		fetch(`http://localhost:5100/AssignmentPage?size=${itemPerPage}&page=${currentPage}`)
				.then((res) => res.json())
				.then((data) => {
					setNewData(data)

				});
		}, [itemPerPage , currentPage , ]);

	

	const { data, isLoading } = useQuery({
		queryKey: ["assignment"],
		queryFn: async () => {
			const res = await axios.get("http://localhost:5100/assignments");
			// setNewData(res.data);
			setNewData2(res.data);
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
	// console.log(newData);
	const handlechange = (e) => {
		const selectElement = e.target;
		const selectedOption =
			selectElement.options[selectElement.selectedIndex];
		const filterValue = selectedOption.value;

		const filteredData = newData2.filter(
			(item) => item.difficulty == filterValue
		);
		

		console.log(filteredData.length);
		if (filteredData.length == 0) {
			// setNewData(newData2);
			// setCountData({count : 6});



			fetch(`http://localhost:5100/AssignmentPage?size=${itemPerPage}&page=${currentPage}&value=${filterValue}`)
						.then((res) => res.json())
						.then((data) => setNewData(data));
			

		} 
		
		else {
			setNewData(filteredData);
			// setCountData({count : filteredData.length});

			
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

			<div className="flex justify-center my-10 ">
			<div className="">
				<button className="btn " onClick={btnPrevious}>
					{" "}
					previous
				</button>

				{pages.map((page) => (
					<button
						key={page}
						onClick={() => setCurrentPage(page)}
						className={`btn join-item ${
							currentPage === page && "btn-primary "
						}`}
					>
						{page}
					</button>
				))}

				<button className="btn " onClick={btnNext}>
					{" "}
					Next
				</button>
			</div>
			</div>
		
		</div>
	);
};

export default Assignment;
