import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/Context";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import loadingImage from "../../assets/loading.gif";

const UpdateAssignment = () => {

	

	const [startDate, setStartDate] = useState(new Date())

	const { user } = useContext(AuthContext);

	const { id } = useParams();
	console.log(id);

	const { data, isLoading } = useQuery({
		queryKey: ["assignment"],
		queryFn: async () => {
			const res = await axios.get(
				`https://study-hub-server-blue.vercel.app/assignments/${id}`
			);
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
	// const textDate2 = new Date('2013-1-30')
	// setStartDate(textDate2)
	// console.log(textDate2);

	// // setStartDate(new Date('2023-10-30'))
	// const textDate2 = new Date('2013-11-30')
	// setStartDate(textDate2);

	const {
		creatorEmail,
		description,
		difficulty,
		dueDate,
		imageURL,
		marks,
		title,
		_id,
	} = data;

	console.log(difficulty);
	console.log(startDate);
	console.log(dueDate);

	const handleSubmit = (e) => {
		e.preventDefault();
        const loadToast = toast.loading("creating Assingmnet")

		const form = e.target;
		const title = form.Title.value;
		const difficulty = form.Difficulty.value;
		const imageURL = form.ImageUrl.value;
		const marks = form.Mark.value;
		const description = form.Description.value;
		const dueDate = startDate.toLocaleDateString();
		const creatorEmail = user.email;
		

		const formData = {
			title,
			difficulty,
			imageURL,
			marks,
			description,
			dueDate,
			creatorEmail,
		};
		console.log(formData);


        axios.put(`https://study-hub-server-blue.vercel.app/assignments/${id}` , formData)
		.then(res => {
			const success = toast.success('Assignment Created Successfully')
			console.log(res.data);
			toast.dismiss(loadToast , success)
		})
		.catch(err => console.log(err))	
	};
	

	

	return (
		<div className="bg-sky-100 p-10 ">
			<div className="md:w-1/2 mx-auto bg-white px-5 pt-5 ">
				<div>
					<h1 className="text-4xl text-center text-blue-400 ">
						Update Assignment
					</h1>
				</div>
				<form onSubmit={handleSubmit} className="form-control ">
					<div className="grid">
						<span>Title</span>
						<input
							type="text"
							name="Title"
							placeholder="Assignment Title"
							className="input input-bordered w-full"
							defaultValue={title}
						/>

						<span>Image url</span>
						<input
							type="text"
							name="ImageUrl"
							placeholder="Assignment thambnail url"
							className="input input-bordered "
							defaultValue={imageURL}
						/>

						<span>Select Difficulty</span>
						<select
							name="Difficulty"
							className="select select-ghost w-full input-bordered"
							id=""
						>
							<option
								selected={
									difficulty == "easy" ? "selected" : false
								}
								value="easy"
							>
								Easy
							</option>
							<option
								selected={
									difficulty == "medium" ? "selected" : false
								}
								value="medium"
							>
								Medeum
							</option>
							<option
								selected={
									difficulty == "hard" ? "selected" : false
								}
								value="hard"
							>
								Hard
							</option>
						</select>

						<span>Total Mark</span>
						<input
							type="Number"
							name="Mark"
							placeholder="Total Mark"
							className="input input-bordered w-full"
							defaultValue={marks}
						/>
					</div>

					<div className=" flex flex-col justify-center  gap-2">
						<span>select Due Date</span>
						<DatePicker
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
							}}
							className="input input-bordered w-full  "
						/>
					</div>

					<span>Short Decription</span>
					<textarea
						name="Description"
						id=""
						className="input-bordered input h-20"
						placeholder="write about the product detail"
						defaultValue={description}
					></textarea>

					<button className="btn btn-primary my-5" type="submit">
						Update Assignment
					</button>
					<Toaster></Toaster>
				</form>
			</div>
		</div>
	);
};

export default UpdateAssignment;
