import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ChangeLogContext } from "../../../App";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	const vancedManagerAPKUrl = useContext(ChangeLogContext)?.manager?.url;

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<Link to="/changelog">Changelog</Link>
				</li>
				<li>
					<a href={vancedManagerAPKUrl}>Download</a>
				</li>
				<li>
					<Link to="https://brave.com/?ref=van874">Support</Link>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
