import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const CreateAssignment = () => {

    const {user} = useContext(AuthContext)


	const [startDate, setStartDate] = useState(new Date());
	const handleSubmit = (e) => {
		e.preventDefault();
		const loadToast = toast.loading("creating Assingmnet")

		const form = e.target;
		const title = form.Title.value;
		const difficulty = form.Difficulty.value;
		const imageURL = form.ImageUrl.value;
		const marks = form.Mark.value;
		const description = form.Description.value;
        const dueDate =  startDate.toLocaleDateString()
        const creatorEmail = user.email
        // console.log(email);

		const formData = {
			title,
			difficulty,
			imageURL,
			marks,
			description,
            dueDate,
            creatorEmail          

		};
		console.log(formData);



		axios.post("https://study-hub-server-blue.vercel.app/assignments" , formData)
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
						Create Assignment 
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
						/>

						<span>Image url</span>
						<input
							type="text"
							name="ImageUrl"
							placeholder="Assignment thambnail url"
							className="input input-bordered "
						/>

						<span>Select Difficulty</span>
						<select
							name="Difficulty"
							className="select select-ghost w-full input-bordered"
							id=""
						>
							<option value="Easy">Easy</option>
							<option value="Medeum">Medeum</option>
							<option value="Hard">Hard</option>
						</select>

						<span>Total Mark</span>
						<input
							type="Number"
							name="Mark"
							placeholder="Total Mark"
							className="input input-bordered w-full"
						/>
					</div>

					<div className=" flex flex-col justify-center  gap-2">
						<span>select Due Date</span>
						<DatePicker
						
							selected={startDate}
							onChange={(date) => setStartDate(date)}
                            className="input input-bordered w-full  "
                            

						/>
					</div>

					<span>Short Decription</span>
					<textarea
						name="Description"
						id=""
						className="input-bordered input h-20"
						placeholder="write about the product detail"
					></textarea>

					<button className="btn btn-primary my-5" type="submit">
						Create Assignment
					</button>
					<Toaster></Toaster>
				</form>
			</div>
		</div>
	);
};

export default CreateAssignment;
