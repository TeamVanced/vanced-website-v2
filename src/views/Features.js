import React from "react";
import classNames from "classnames";
import { SectionProps } from "../utils/SectionProps";

import featuresData from "../constants/featuresData";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Features = ({
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

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							<span className="vanced--gradient">Vanced</span> Features
						</h1>
					</div>
				</div>
				<div
					align="left"
					className="reveal-from-bottom"
					data-reveal-delay="300"
				>
					{featuresData.map(data => (
						<React.Fragment key={data.name}>
							<div className="features--image--container">
								{data.images.map((img, idx) => (
									<div
										key={idx}
										style={{
											width: "100%",
											padding: "20px",
										}}
									>
										<img
											src={img}
											alt={data.name}
											style={{
												maxWidth: "213px",
												boxShadow: "rgb(156, 169, 179) 0px 0px 0px 2px",
											}}
										/>
									</div>
								))}
							</div>
							<h3>{data.name} </h3>
							<ul>
								{data.data.map(point => (
									<li key={point}>{point}</li>
								))}
							</ul>
							<hr />
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

Features.propTypes = propTypes;
Features.defaultProps = defaultProps;

export default Features;
