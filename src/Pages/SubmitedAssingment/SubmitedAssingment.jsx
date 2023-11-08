import React, { useEffect, useState } from "react";
import loadingImage from "../../assets/loading.gif";
import noData from "../../assets/no-result.gif";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SubmitedAssingment = () => {
	// const {id} = useParams()

	const [getSubmitData, setGetSubmitData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://study-hub-server-blue.vercel.app/submittedAssignments"
			)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="h-screen w-screen flex justify-center items-center -mt-10">
				<img src={loadingImage} alt="" />
			</div>
		);
	}

	if (data.length == 0) {
		return (
			<div className="h-screen w-screen flex justify-center items-center -mt-10">
				<img src={noData} alt="" />
			</div>
		);
	}

	console.log(data.length);
	// console.log(getSubmitData._id);

	const handleSubmit = (e) => {
		e.preventDefault();
		const loadToast = toast.loading("Submettiing Assingmnet");

		const status = "completed";
		const obtainMarks = e.target.mark.value;
		const feedback = e.target.Feedback.value;
		const id = getSubmitData._id;
		console.log(getSubmitData._id);

		const obj = {
			status,
			obtainMarks,
			feedback,
			id,
		};
		console.log(obj);
		//  , id ,obtainMarks , feedback

		//

		axios
			.put(
				`https://study-hub-server-blue.vercel.app/submittedAssignments/${id}`,
				obj
			)
			.then((res) => {
				const success = toast.success("Assignning Mark Successfully");
				console.log(res.data);
				toast.dismiss(loadToast, success);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="mx-5 my-10">
			<div className="overflow-x-auto">
				<table className="table table-xs md:table-lg mx-auto">
					<thead>
						<tr>
							<th>Assignment Title</th>
							<th>Total Marks</th>
							<th> Examinee name</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="space-y-5">
						{data.map((item) => (
							<tr className="hover">
								<td>{item.title}</td>
								<td>{item.marks}</td>
								<td>{item.userName}</td>
								<button
									className="btn mb-5 btn-primary"
									onClick={() => {
										document
											.getElementById("my_modal_5")
											.showModal();
										setGetSubmitData(item);
									}}
								>
									Give Mark
								</button>{" "}
							</tr>
						))}
					</tbody>
				</table>

				<dialog
					id="my_modal_5"
					className="modal modal-bottom sm:modal-middle"
				>
					<div className="modal-box   relative">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
								✕
							</button>
						</form>
						<p className="py-4">PDF Link : {getSubmitData.pdf}</p>
						<p className="pb-4">Note: {getSubmitData.note}</p>

						<div>
							<iframe
								src={getSubmitData.pdf}
								className="w-full h-screen bg-red-500"
							/>
						</div>

						<form onSubmit={handleSubmit}>
							<input
								type="number"
								name="mark"
								placeholder={`Assign a mark .  the total mark is ${getSubmitData.marks}`}
								className="    mb-5 input input-bordered w-full "
								required
							/>

							<textarea
								placeholder="Feedback"
								name="Feedback"
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

export default SubmitedAssingment;
