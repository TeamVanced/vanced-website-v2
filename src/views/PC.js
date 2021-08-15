import React, {lazy, Suspense} from "react";
// import sections
import Hero from "../components/sections/Hero";

const Home = () => {
	return (
		<Suspense fallback={<div>Loading..</div>}>
			<Hero className="illustration-section-01" />
		</Suspense>
		
	);
};

export default Home;
