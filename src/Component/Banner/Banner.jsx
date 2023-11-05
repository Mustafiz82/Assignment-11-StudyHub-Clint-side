import React from 'react';
import bg from "../../assets/online-education-background-vector-24205971.jpg"


const Banner = () => {
    return (
        <div>
            
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						`url(${bg})`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-3xl">
						<h1 className="mb-5 text-5xl font-bold">Welcome to StudyHub</h1>
						<p className="mb-5">Your Ultimate Hub for Collaborative Learning and Academic Excellence. Join StudyHub to effortlessly create, share, and collaborate on assignments. Receive instant feedback, connect with study groups, and unlock your full educational potential. It's the perfect place for managing assignments and accelerating your learning journey!
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Banner;