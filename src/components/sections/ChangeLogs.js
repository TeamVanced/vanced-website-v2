import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

import { ManagerContext } from "../../App";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const ChangeLogs = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	const [vancedData, setVanced] = useState({});
	const [musicData, setMusic] = useState({});
	const [microgData, setMicrog] = useState({});

	useEffect(() => {
		fetch("https://api.github.com/repos/YTVanced/Vanced/releases/latest")
			.then(res => res.json())
			.then(data => setVanced(data));
	}, []);

	useEffect(() => {
		fetch("https://api.github.com/repos/YTVanced/VancedMusic/releases/latest")
			.then(res => res.json())
			.then(data => setMusic(data));
	}, []);

	useEffect(() => {
		fetch("https://api.github.com/repos/YTVanced/VancedMicroG/releases/latest")
			.then(res => res.json())
			.then(data => setMicrog(data));
	}, []);

	const managerData = useContext(ManagerContext);

	const changeLogsLoopData = [
		{ name: "Vanced Manager", data: managerData },
		{ name: "MicroG", data: vancedData },
		{ name: "YouTube™ Music Vanced", data: musicData },
		{ name: "YouTube™ Vanced", data: microgData },
	];

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							<span className="vanced--gradient">Vanced</span> Changelogs
						</h1>
					</div>
				</div>
				<div
					align="left"
					className="reveal-from-bottom"
					data-reveal-delay="300"
				>
					{changeLogsLoopData.map(data => (
						<React.Fragment key={data.name}>
							<h3>
								{data.name}{" "}
								<a href={data?.data?.html_url}>
									<span
										className="m-0 mb-32 reveal-from-bottom text-sm text-color-secondary"
										data-reveal-delay="400"
									>
										(v{data?.data?.tag_name.split('-')[0]})
									</span>
								</a>
							</h3>
							<p>Changelog:</p>
							<ul>
								{data?.data?.body.split("- ").map(point => {
									if (point) {
										return <li key={point}>{point}</li>;
									}
								})}
							</ul>
							<hr />
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

ChangeLogs.propTypes = propTypes;
ChangeLogs.defaultProps = defaultProps;

export default ChangeLogs;
