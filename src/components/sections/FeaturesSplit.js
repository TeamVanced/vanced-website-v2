import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

import featuresData from "../../constants/featuresData";

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className,
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider",
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top",
	);

	const sectionHeader = {
		title: "Features",
		paragraph: "",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
						tag="h3"
					/>
					{/* <p className="center-content">Features</p> */}
					<div className={splitClasses}>
						{featuresData.map((feature, idx) => (
							<div className="split-item" key={idx}>
								<div
									className="split-item-content center-content-mobile reveal-from-left"
									data-reveal-container=".split-item"
								>
									<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
										#{idx + 1}
									</div>
									<h3 className="mt-0 mb-12">{feature.name}</h3>
									<ul style={{ padding: "0 0 0 15px" }}>
										{feature.data.map(point => (
											<li
												key={point}
												style={{ textAlign: "justify", fontSize: "16px" }}
											>
												{point}
											</li>
										))}
									</ul>
								</div>
								<div
									className={classNames(
										" center-content-mobile reveal-from-bottom",
										imageFill && "split-item-image-fill",
									)}
									data-reveal-container=".split-item"
									align="center"
								>
									<div className="features--image--container">
										{feature.images.map((img, idx) => (
											<div
												key={idx}
												style={{
													width: "100%",
													padding: "20px",
												}}
											>
												<Image
													src={img}
													alt={feature.name}
													width={213}
													height={396}
													style={{
														maxWidth: "213px",
														boxShadow: "rgb(156, 169, 179) 0px 0px 0px 2px",
													}}
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						))}

						{/* <div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-right"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Lightning fast workflow
								</div>
								<h3 className="mt-0 mb-12">Data-driven insights</h3>
								<p className="m-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									— Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill",
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-02.png")}
									alt="Features split 02"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									Lightning fast workflow
								</div>
								<h3 className="mt-0 mb-12">Data-driven insights</h3>
								<p className="m-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
									— Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill",
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/features-split-image-03.png")}
									alt="Features split 03"
									width={528}
									height={396}
								/>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
