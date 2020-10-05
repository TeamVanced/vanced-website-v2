import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Logo from "./partials/Logo";
import { ChangeLogContext } from "../../App";

const propTypes = {
	navPosition: PropTypes.string,
	hideNav: PropTypes.bool,
	hideSignin: PropTypes.bool,
	bottomOuterDivider: PropTypes.bool,
	bottomDivider: PropTypes.bool,
};

const defaultProps = {
	navPosition: "",
	hideNav: false,
	hideSignin: false,
	bottomOuterDivider: false,
	bottomDivider: false,
};

const Header = ({
	className,
	navPosition,
	hideNav,
	hideSignin,
	bottomOuterDivider,
	bottomDivider,
	...props
}) => {
	const [isActive, setIsactive] = useState(false);

	const nav = useRef(null);
	const hamburger = useRef(null);

	useEffect(() => {
		isActive && openMenu();
		document.addEventListener("keydown", keyPress);
		document.addEventListener("click", clickOutside);
		return () => {
			document.removeEventListener("keydown", keyPress);
			document.addEventListener("click", clickOutside);
			closeMenu();
		};
	});

	const openMenu = () => {
		document.body.classList.add("off-nav-is-active");
		nav.current.style.maxHeight = nav.current.scrollHeight + "px";
		setIsactive(true);
	};

	const closeMenu = () => {
		document.body.classList.remove("off-nav-is-active");
		nav.current && (nav.current.style.maxHeight = null);
		setIsactive(false);
	};

	const keyPress = e => {
		isActive && e.keyCode === 27 && closeMenu();
	};

	const clickOutside = e => {
		if (!nav.current) return;
		if (
			!isActive ||
			nav.current.contains(e.target) ||
			e.target === hamburger.current
		)
			return;
		closeMenu();
	};

	const classes = classNames(
		"site-header",
		bottomOuterDivider && "has-bottom-divider",
		className,
	);

	const ytVanced = useContext(ChangeLogContext)?.vanced;
	const musicVanced = useContext(ChangeLogContext)?.music;
	const vancedManagerAPKUrl = useContext(ChangeLogContext)?.manager?.url;

	return (
		<header {...props} className={classes}>
			<div className="container">
				<div
					className={classNames(
						"site-header-inner",
						bottomDivider && "has-bottom-divider",
					)}
				>
					<Logo />
					{!hideNav && (
						<>
							<button
								ref={hamburger}
								className="header-nav-toggle"
								onClick={isActive ? closeMenu : openMenu}
							>
								<span className="screen-reader">Menu</span>
								<span className="hamburger">
									<span className="hamburger-inner"></span>
								</span>
							</button>
							<nav
								ref={nav}
								className={classNames("header-nav", isActive && "is-active")}
							>
								<div className="header-nav-inner">
									<ul
										className={classNames(
											"list-reset text-xs",
											navPosition && `header-nav-${navPosition}`,
										)}
									>
										<li title="Latest Vanced version">
											<Link to="/changelogs" onClick={closeMenu}>
												Vanced v{ytVanced?.version}
											</Link>
										</li>
										<li title="Latest Vanced version">
											<Link to="/changelogs" onClick={closeMenu}>
												Music v{musicVanced?.version}
											</Link>
										</li>
										<li title="Latest Vanced version">
											<Link to="/features" onClick={closeMenu}>
												Features
											</Link>
										</li>
									</ul>
									<ul className="list-reset header-nav-right">
										<li>
											<a
												href={vancedManagerAPKUrl}
												className="button button-primary button-wide-mobile button-sm"
												onClick={closeMenu}
											>
												Download
											</a>
										</li>
									</ul>
									{/* {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</Link>
                      </li>
                    </ul>
                    } */}
								</div>
							</nav>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
