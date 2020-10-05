import React from "react";
import classNames from "classnames";

import {
	FaDiscord,
	FaRedditSquare,
	FaTwitterSquare,
	FaTelegramPlane,
} from "react-icons/fa";
import { SiXdadevelopers } from "react-icons/si";

const FooterSocial = ({ className, ...props }) => {
	const classes = classNames("footer-social", className);

	return (
		<div {...props} className={classes}>
			<ul className="list-reset">
				<li>
					<a href="https://discord.com/invite/xHERtjn">
						<FaDiscord size="2em" />
					</a>
				</li>
				<li>
					<a href="https://www.reddit.com/r/Vanced/">
						<FaRedditSquare size="2em" />
					</a>
				</li>
				<li>
					<a href="https://twitter.com/ytvanced">
						<FaTwitterSquare size="2em" />
					</a>
				</li>
				<li>
					<a href="https://t.me/Vanced">
						<FaTelegramPlane size="2em" />
					</a>
				</li>
				<li>
					<a href="https://forum.xda-developers.com/android/apps-games/app-youtube-vanced-edition-t3758757">
						<SiXdadevelopers size="2em" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterSocial;
