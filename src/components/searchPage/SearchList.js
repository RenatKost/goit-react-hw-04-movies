import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const SearchList = ({ qweryList, location }) => {
	return (
		<ul>
			{qweryList.map((item) => (
				<li key={item.id}>
					<Link
						to={{
							pathname: `/movies/${item.id}`,
							state: { from: location },
						}}
					>
						{item.original_title}
					</Link>
				</li>
			))}
		</ul>
	);
};

SearchList.propTypes = {
	qweryList: PropTypes.array.isRequired,
};

export default withRouter(SearchList);
