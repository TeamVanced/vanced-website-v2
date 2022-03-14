import React, {lazy, Suspense} from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
//const FeaturesSplit = lazy(() => import("../components/sections/FeaturesSplit"));
// import Testimonial from "../components/sections/Testimonial";
// import Cta from "../components/sections/Cta";
const Home = () => {
	return (
		<Suspense fallback={<div>Loading..</div>}>
			<Hero className="illustration-section-01" />
			{/* <Testimonial topDivider /> */}
			{/* <Cta split /> */}
		</Suspense>
		
	);
};

export default Home;
