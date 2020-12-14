import React, { useRef, useEffect, useState, createContext } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
// import ReactGA from "react-ga";
import TagManager from "react-gtm-module";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import ChangeLog from "./views/ChangeLog";
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

export const ChangeLogContext = createContext();
export const ShowBraveContext = createContext();

// Change this to show BRAVE across website
export const showBrave = true;

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

	const [changeLogs, setChangeLogs] = useState({});

	useEffect(() => {
		fetch(process.env.REACT_APP_VANCED_LATEST_API_URL)
			.then(res => res.json())
			.then(data => setChangeLogs(data));
	}, []);

	return (
		<ShowBraveContext.Provider value={showBrave}>
			<ChangeLogContext.Provider value={changeLogs}>
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
								path="/changelogs"
								component={ChangeLog}
								layout={LayoutDefault}
							/>
							<AppRoute
								exact
								path="/features"
								component={Features}
								layout={LayoutDefault}
							/>
						</Switch>
					)}
				/>
			</ChangeLogContext.Provider>
		</ShowBraveContext.Provider>
	);
};

TagManager.initialize(tagManagerArgs);
export default App;
