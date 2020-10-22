import React, { Component } from "react";
import style from "./SearchPage.module.css";
import { serchRequest } from "../../components/axiosRequest/AxiosRequest";
import SearchList from "../../components/searchPage/SearchList";
import queryString from "query-string";

export default class SearchForm extends Component {
	state = {
		qweryList: [],
		value: "",
	};

	componentDidMount() {
		const qwery = queryString.parse(this.props.location.search).qwery;

		if (qwery) {
			this.setState({ value: qwery });
			this.searchFunc(qwery);
		}
	}

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	handelSubmit = (e) => {
		e.preventDefault();

		//реализация если предидущая категория не совпадает
		this.searchFunc(this.state.value);

		this.props.history.push({
			...this.props.location.pathname,
			search: `qwery=${this.state.value}`,
		});
	};

	searchFunc = (qwery) => {
		serchRequest(qwery)
			.then((resp) => this.setState({ qweryList: resp.data.results }))
			.catch((error) => this.setState({ error }));
	};

	render() {
		const { value, qweryList } = this.state;
		return (
			<>
				<div className={style.form_wrapper}>
					<form className={style.form} onSubmit={this.handelSubmit}>
						<input
							className={style.formText}
							type="text"
							value={value}
							name="value"
							placeholder="Enter search"
							onChange={this.handleChange}
						/>
						<button type="submit" className={style.formButton}>
							Search..
						</button>
					</form>
				</div>
				{qweryList.length > 0 ? (
					<SearchList qweryList={qweryList} />
				) : (
					<p className={style.notFound}>
						Ups nothing matching your request...
					</p>
				)}
			</>
		);
	}
}
