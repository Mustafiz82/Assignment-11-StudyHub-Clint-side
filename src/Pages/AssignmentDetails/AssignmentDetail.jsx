import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import loadingImage from "../../assets/loading.gif";
import { AuthContext } from "../../Context/Context";
import toast, { Toaster } from 'react-hot-toast';


const AssignmentDetail = () => {
	const { id } = useParams();
	const { user } = useContext(AuthContext);

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
		e.preventDefault();
		const loadToast = toast.loading("Submettiing Assingmnet")


		const pdf = e.target.pdf.value;
		const note = e.target.textArea.value;
		const userName = user.displayName;
		const userEmail = user.email;
		const status = "pending"
		const ObtainMarks = "pending"
		const feedback = "pending"

		const pdfData = { pdf, note, userEmail, userName  ,status , title ,marks};

		axios
			.post("http://localhost:5100/submittedAssignments", pdfData)
			.then((res) => {
				const success = toast.success('Assignment Submitted Successfully')
				console.log(res.data);
				toast.dismiss(loadToast , success)
			})
			.catch((err) => console.log(err));

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
								type="url"
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
							<Toaster></Toaster>

						</form>
					</div>
				</dialog>
			</div>
		</div>
	);
};

export default AssignmentDetail;
