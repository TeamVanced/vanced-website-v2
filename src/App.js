import React, { useRef, useEffect, useState, createContext } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import TagManager from "react-gtm-module";
// Views
import Home from "./views/Home";
import ChangeLog from "./views/ChangeLog";
import PC from "./views/PC";
import Features from "./views/Features";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = page => {
// 	ReactGA.set({ page });
// 	ReactGA.pageview(page);
// };

const tagManagerArgs = {
	gtmId: "GTM-MXQ4LWV",
};

export const ManagerContext = createContext();
export const ShowBraveContext = createContext();

// Change this to show BRAVE across website
export const showBrave = false;

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		// const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		//trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const [managerData, setManager] = useState({});


	return (
		<ShowBraveContext.Provider value={showBrave}>
			<ManagerContext.Provider value={managerData}>
				<ScrollReveal
					ref={childRef}
					children={() => (
						<Switch>
							<AppRoute
								exact
								path="/"
								component={Home}
								layout={LayoutDefault}
							/>
							<AppRoute
								exact
								path="/pc"
								component={PC}
								layout={LayoutDefault}
							/>
						</Switch>
					)}
				/>
			</ManagerContext.Provider>
		</ShowBraveContext.Provider>
	);
};

TagManager.initialize(tagManagerArgs);
export default App;
