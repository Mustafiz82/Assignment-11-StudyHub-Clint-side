import React from "react";
import { Link } from "react-router-dom";

const Assignmentcard = ({ item }) => {
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

	return (
		<div>
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
							<button className="btn btn-primary">
								view Assignment
							</button>
						</Link>
						<Link to={`/updataAssignment/${_id}`}><button  className="btn btn-primary">
							Update Assignment
						</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assignmentcard;
