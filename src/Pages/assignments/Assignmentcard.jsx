import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/Context";

const Assignmentcard = ({ item }) => {
	const { user } = useContext(AuthContext);
	const [isdeleted , setIsdeleted] = useState(false)

	const {
		creatorEmail,
		description,
		difficulty,
		dueDate,
		imageURL,
		marks,
		title,
		_id,
	} = item;

	const handlealart = () => {
		

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			
			if (result.isConfirmed) {

				const clintEmail = user.email;
						

				axios
					.delete(`https://study-hub-server-blue.vercel.app/assignments/${_id}?email=${clintEmail}`)
					.then((res) => {
						console.log(res.data);
						


						if (res.data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
							setIsdeleted(true)
						}
						else{
							Swal.fire({
								icon: "error",
								title: "Oops... ",
								text: "Something went wrong",
								footer: ''
							  });
						}
					})
					.catch(err => {
						console.log(err);

						Swal.fire({
							icon: "error",
							title: "Oops... Assignment Not Deleted",
							text: "Only Assignmetn Creator can delete the Asignment",
							footer: ''
						  });
					})
			}
		});
	};

	return (
		<div className={isdeleted && "hidden"}>
			<div className="card bg-base-100 shadow-xl">
				<figure className=" bg-sky-200">
					<img
						src={imageURL}
						alt="Shoes"
						className="rounded-xl w-full h-56 object-cover"
					/>
				</figure>

				<div className="card-body items-center text-center">
					<div className="card-actions justify-center ">
						<div className="badge badge-outline">{marks} marks</div>
						<div className="badge badge-outline">{difficulty}</div>
					</div>
					<h2 className="card-title">{title}</h2>
					<p>Deadline {dueDate}</p>

					<div className="card-actions">
						<Link to={`/assignments/${_id}`}>
							<button className="btn btn-primary">view</button>
						</Link>
						<Link to={`/updataAssignment/${_id}`}>
							<button className="btn btn-primary">Update</button>
						</Link>
						<button
							onClick={handlealart}
							className="btn btn-primary"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assignmentcard;
