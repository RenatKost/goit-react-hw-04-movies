import React, { Component } from "react";
import { movieIdRequest } from "./../axiosRequest/AxiosRequest";
//--------------------------------------------------------------
import CardPage from "../../pages/cardPage/CardPage";

const getId = (props) => props.match.params.movieId;

export default class ElementList extends Component {
	state = { movieObj: null };

	componentDidMount() {
		this.fetchMovieId();
	}

	fetchMovieId = () => {
		movieIdRequest(getId(this.props))
			.then((movieObj) => {
				this.setState({ movieObj: movieObj.data });
			})
			.catch((error) => {
				this.props.history.replace("/error");
				console.log("Card page", error);
			});
	};

	onGoBack = () => {
		const { history, location } = this.props;

		if (location.state) {
			return history.push(location.state.from);
		}
		history.push("/");
	};

	render() {
		const { movieObj } = this.state;

		return (
			<>
				{movieObj && (
					<CardPage movieObj={movieObj} onGoBack={this.onGoBack} />
				)}
			</>
		);
	}
}
