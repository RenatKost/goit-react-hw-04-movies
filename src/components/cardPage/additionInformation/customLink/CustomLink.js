import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../AdditionInformation.module.css";

const CustomLink = ({ name, match, location }) => {
	return (
		<NavLink
			to={{
				pathname: `${match.url}/${name.toLowerCase()}`,
				state: {
					from: location.state ? location.state.from : "/",
				},
			}}
			className={style.link}
			activeClassName={style.active_link}
		>
			{name}
		</NavLink>
	);
};

export default withRouter(CustomLink);
