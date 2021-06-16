import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<Link className="nav-link" aria-current="page" to="/house">
					House
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/about">
					About
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
