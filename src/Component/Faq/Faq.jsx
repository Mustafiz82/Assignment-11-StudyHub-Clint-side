import React from "react";

const Faq = () => {
	return (
		<div className=" bg-sky-100 py-20 ">
            <div className="max-w-3xl mx-auto">
			<h1 className="text-4xl text-center font-medium mb-5">
				FAQ (Frequently Asked Question)
			</h1>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" checked="checked" />
				<div className="collapse-title text-xl font-medium">
					What is StudyHub?
				</div>
				<div className="collapse-content">
					<p>
						StudyHub is an online platform designed to facilitate
						collaborative learning and assignment management. It
						allows students to create, submit, and evaluate
						assignments while connecting with peers.
					</p>
				</div>
			</div>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
					How do I create an account on StudyHub?{" "}
				</div>
				<div className="collapse-content">
					<p>
						To create an account, click the "Sign Up" button and
						follow the registration process. You'll need a valid
						email address and a password to get started.
					</p>
				</div>
			</div>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
					How do I create an assignment on StudyHub?
				</div>
				<div className="collapse-content">
					<p>
						After logging in, navigate to the "Create Assignment"
						section and follow the simple steps to set up your
						assignment, including details, deadlines, and any
						attachments.
					</p>
				</div>
			</div>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
					How do I get feedback and grades for my assignments?
				</div>
				<div className="collapse-content">
					<p>
						Once you submit an assignment, you & your friends can
						provide feedback and grades directly on the platform.
						you can see if you got marks
					</p>
				</div>
			</div>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
					Is my data secure on StudyHub?
				</div>
				<div className="collapse-content">
					<p>
						Yes, StudyHub takes data security seriously. We use
						encryption and follow best practices to protect your
						personal and academic information.
					</p>
				</div>
			</div>
			<div className="collapse collapse-arrow ">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
					Can I access StudyHub on my mobile device?
				</div>
				<div className="collapse-content">
					<p>
						Yes, StudyHub is fully responsive, so you can access it
						on your mobile phone, tablet, or any device with
						internet access.
					</p>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Faq;
