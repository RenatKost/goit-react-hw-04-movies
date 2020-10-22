import React from "react";
import { withRouter } from "react-router-dom";
//----------------------------------------------
import CustomLink from "./customLink/CustomLink";
import style from "./AdditionInformation.module.css";

const AdditionInformation = () => (
	<div className={style.wrapper}>
		<h4 className={style.title}>Addition information</h4>
		<ul className={style.list}>
			<li className={style.list_item}>
				<CustomLink name={"Cast"} />
			</li>
			<li className={style.list_item}>
				<CustomLink name={"Reviews"} />
			</li>
		</ul>
	</div>
);

export default withRouter(AdditionInformation);
