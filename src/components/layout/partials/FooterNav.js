import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ManagerContext, ShowBraveContext } from "../../../App";
import { SiBrave, SiAdguard } from "react-icons/si";
import { ADGUARD, BRAVE } from "../../../constants/links";

const FooterNav = ({ className, ...props }) => {
	const classes = classNames("footer-nav", className);

	const showBrave = useContext(ShowBraveContext);

	return (
		<nav {...props} className={classes}>
			<ul className="list-reset">
				{showBrave && (
					<li>
						<a href={BRAVE} target="_blank" rel="noopener noreferrer">
							Support Us <SiBrave size="1.5em" color="white" className="ml-4" />
						</a>
					</li>
				)}
				<li>
					<a href={ADGUARD} target="_blank" rel="noopener noreferrer">
						Support Us <SiAdguard size="1.5em" color="white" className="ml-4" />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
