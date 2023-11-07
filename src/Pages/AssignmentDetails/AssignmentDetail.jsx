import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import loadingImage from "../../assets/loading.gif";

const AssignmentDetail = () => {
	const { id } = useParams();
	console.log(id);

	const { data, isLoading } = useQuery({
		queryKey: ["assignment"],
		queryFn: async () => {
			const res = await axios.get(
				`http://localhost:5100/assignments/${id}`
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

	const handlesubmit = (e) => {

        const pdf = e.target.pdf.value
        const textArea = e.target.textArea.value
        console.log(pdf , textArea);
		e.preventDefault();

		console.log("hello");
	};

	return (
		<div className="flex gap-5 items-center first:">
			<div>
				<img src={imageURL} alt="" />
			</div>

			<div className="space-y-2 text-xl max-w-lg">
				<h1 className="text-3xl font-semibold my-5">{title}</h1>
				<p>
					<span className="font-bold">Objective :</span>
					<span className="text-xl ">{description}</span>
				</p>
				<p>
					<span className="font-bold">Difficulty:</span> {difficulty}
				</p>
				<p>
					<span className="font-bold">Total Marks : </span> {marks}
				</p>
				<p>
					<span className="font-bold"> Last Date to submit : </span>{" "}
					{dueDate}
				</p>
				<button
					className="btn btn-primary"
					onClick={() =>
						document.getElementById("my_modal_5").showModal()
					}
				>
					Take Assignment
				</button>
				<dialog
					id="my_modal_5"
					className="modal modal-bottom sm:modal-middle"
				>
					<div className="modal-box relative">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
								✕
							</button>
						</form>
						<p className="py-4">
							Press input your submit links here and give feedback
						</p>

						<form onSubmit={handlesubmit}>
							<input
								type="text"
								name="pdf"
								placeholder="Pdf Link"
								className="    mb-5 input input-bordered w-full "
							/>

							<textarea
								placeholder="QuickNote"
                                name="textArea"
								className="textarea textarea-bordered textarea-md w-full "
							></textarea>

							<button className="btn btn-success  ">
								Submit
							</button>
						</form>
					</div>
				</dialog>
			</div>
		</div>
	);
};

export default AssignmentDetail;
