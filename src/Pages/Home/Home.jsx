import React from "react";
import Banner from "../../Component/Banner/Banner";
import Faq from "../../Component/Faq/Faq";
import Footer from "../../Component/Footer/Footer";
import Featured from "../../Component/Featured/Featured";

const Home = () => {
	return (
		<div>
            <Banner></Banner>
			<Featured></Featured>
            <Faq></Faq>
            <Footer></Footer>
		</div>
	);
};

export default Home;
