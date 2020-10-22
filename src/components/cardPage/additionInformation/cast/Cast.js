import React, { Component } from "react";
//---------------------------------------
import { actorsRequest } from "../../../axiosRequest/AxiosRequest";
import style from "./Cast.module.css";

const imagePosterPath = (src) => {
	return `https://image.tmdb.org/t/p/w138_and_h175_face/${src}`;
};

export default class Cast extends Component {
	state = { actors: [] };

	componentDidMount() {
		this.fetchRequest();
	}

	fetchRequest = () => {
		actorsRequest(this.props.pageId)
			.then((resp) => this.setState({ actors: resp.data.cast }))
			.catch((error) => this.setState({ error }));
	};

	render() {
		const { actors } = this.state;

		return (
			<ul className={style.list}>
				{actors.map(({ name, id, profile_path, character }) => (
					<li key={id} className={style.list_item}>
						<h4 className={style.list_item_name}>{name}</h4>
						<img
							alt={name}
							src={
								profile_path
									? imagePosterPath(profile_path)
									: "https://via.placeholder.com/138x175?text=Actors"
							}
							className={style.list_item_img}
						/>
						<p className={style.list_item_character}>
							Character:{" "}
							<span className={style.list_item_character_text}>
								{character ? character : `undefine :(`}
							</span>
						</p>
					</li>
				))}
			</ul>
		);
	}
}
