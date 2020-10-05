import React, { useContext } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

import { ChangeLogContext } from "../../App";

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

	const changeLogs = useContext(ChangeLogContext);

	const changeLogsLoopData = [
		{ name: "Vanced Manager", data: changeLogs?.manager },
		{ name: "Micro G", data: changeLogs?.microg },
		{ name: "Youtube Music Vanced", data: changeLogs?.music },
		{ name: "Youtube Vanced", data: changeLogs?.vanced },
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
								<a href={data?.data?.url}>
									<span
										className="m-0 mb-32 reveal-from-bottom text-sm text-color-secondary"
										data-reveal-delay="400"
									>
										(v{data?.data?.version})
									</span>
								</a>
							</h3>
							<p>Changelog:</p>
							<ul>
								{data?.data?.changelog.split("- ").map(point => {
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
