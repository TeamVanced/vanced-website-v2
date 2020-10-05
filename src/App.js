import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import ChangeLog from "./views/ChangeLog";
import Features from "./views/Features";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
	ReactGA.set({ page });
	ReactGA.pageview(page);
};

export const ChangeLogContext = React.createContext();

const App = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		trackPage(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	const [changeLogs, setChangeLogs] = React.useState({});

	useEffect(() => {
		fetch(
			"https://cors-anywhere.herokuapp.com/https://vanced.app/api/v1/latest.json",
		)
			.then(res => res.json())
			.then(data => setChangeLogs(data));
	}, []);

	return (
		<ChangeLogContext.Provider value={changeLogs}>
			<ScrollReveal
				ref={childRef}
				children={() => (
					<Switch>
						<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
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
	);
};

export default App;
