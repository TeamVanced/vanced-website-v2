import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
// import SectionHeader from "./partials/SectionHeader";
// import Image from "../elements/Image";

import { FaYoutube, FaMusic } from "react-icons/fa";
import { SiBrave } from "react-icons/si";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left",
	);

	// const sectionHeader = {
	// 	title: "Build up the whole picture",
	// 	paragraph:
	// 		"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
	// };

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					{/* <SectionHeader data={sectionHeader} className="center-content" /> */}
					<div className={tilesClasses}>
						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="700"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div
										className="features-tiles-item-image mb-16"
										style={{
											height: "64px",
											width: "64px",
										}}
									>
										{/* <Image
											src={require("./../../assets/images/feature-tile-icon-01.svg")}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/> */}

										<FaYoutube size="2em" color="white" />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Install Vanced</h4>
									<p className="m-0 text-sm" style={{ textAlign: "justify" }}>
										YouTube Vanced is the stock Android YouTube app, but better!
										Includes adblocking, true amoled dark mode and a lot more.
										Use the handy Vanced Manager to install YouTube Vanced with
										ease.
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="900"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div
										className="features-tiles-item-image mb-16"
										style={{
											height: "64px",
											width: "64px",
										}}
									>
										{/* <Image
											src={require("./../../assets/images/feature-tile-icon-02.svg")}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/> */}
										<FaMusic size="2em" color="white" />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Music</h4>
									<p className="m-0 text-sm" style={{ textAlign: "justify" }}>
										Vanced, but for Youtube Music! This is relatively less
										feature rich compared to vanced but still features many
										things you come to expect like adblocking and background
										playback all inside Youtube Music!
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="1100"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div
										className="features-tiles-item-image mb-16"
										style={{
											height: "64px",
											width: "64px",
										}}
									>
										{/* <Image
											src={require("./../../assets/images/feature-tile-icon-03.svg")}
											alt="Features tile icon 03"
											width={64}
											height={64}
										/> */}
										<SiBrave size="2em" color="white" />
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Try brave!</h4>
									<p className="m-0 text-sm" style={{ textAlign: "justify" }}>
										<a
											href="https://brave.com/?ref=van874"
											target="_blank"
											rel="noopener noreferrer"
										>
											Brave
										</a>{" "}
										is available as a fast, free, secure web browser for your
										mobile devices. Complete with a built-in adblocker that
										prevents tracking and provides security protection with
										optimized data and battery performance.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
