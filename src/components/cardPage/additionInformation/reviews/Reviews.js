import React, { Component } from "react";
//---------------------------------------------------------------
import { reviewRequest } from "../../../axiosRequest/AxiosRequest";
import style from "./Reviews.module.css";

export default class Reviews extends Component {
	state = { reviews: [] };

	componentDidMount() {
		this.fetchReview();
	}

	fetchReview = () => {
		reviewRequest(this.props.pageId)
			.then((resp) => this.setState({ reviews: resp.data.results }))
			.catch((error) => this.setState({ error }));
	};

	render() {
		const { reviews } = this.state;

		return (
			<ul className={style.list}>
				{reviews.length > 0 ? (
					reviews.map(({ author, content, id }) => (
						<li key={id} className={style.list_item}>
							<h4 className={style.author}>
								Author :{" "}
								<span className={style.author_decorate}>
									{author}
								</span>
							</h4>
							<p className={style.content}>{content}</p>
						</li>
					))
				) : (
					<p className={style.no_reviews}>No Reviews...</p>
				)}
			</ul>
		);
	}
}
