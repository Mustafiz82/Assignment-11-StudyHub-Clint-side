import React from "react";
import bg from "../../assets/online-education-background-vector-24205971.jpg";
import { motion } from "framer-motion";

const Banner = () => {
	return (
		<div>
			<div className="hero bg-[#B5EFE5] min-h-screen">
				<div className=" "></div>

				<div></div>
				<div className="flex flex-col-reverse lg:flex-row text-black">
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-3xl text-black">
							<h1 className="mb-5 text-5xl font-bold">
								Welcome to StudyHub
							</h1>
							<p className="mb-5">
								Your Ultimate Hub for Collaborative Learning and
								Academic Excellence. Join StudyHub to
								effortlessly create, share, and collaborate on
								assignments. Receive instant feedback, connect
								with study groups, and unlock your full
								educational potential. It's the perfect place
								for managing assignments and accelerating your
								learning journey!
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
					<div className="w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px]">
						<iframe  src='https://my.spline.design/	superkidrobotcopy-2ada04c9c17beda583588a902bb56095/' frameborder='0' width='100%' height='100%'></iframe>
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
