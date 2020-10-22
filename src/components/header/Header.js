//imr
//ip
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

//slr
const Header = () => {
	return (
		<nav className={style.head_wrapper}>
			<NavLink
				to="/"
				exact
				className={style.btn}
				activeClassName={style.active_btn}
			>
				Home
			</NavLink>
			<NavLink
				to="/movies"
				className={style.btn}
				activeClassName={style.active_btn}
			>
				Movies
			</NavLink>
		</nav>
	);
};

export default Header;
