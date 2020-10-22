import React, { lazy, Suspense } from "react";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//------------------------------------------
import style from "./CardPage.module.css";
import AdditionInformation from "./../../components/cardPage/additionInformation/AdditionInformation";
//---Синхронный импорт
//import Cast from "./../../components/cardPage/additionInformation/cast/Cast";
//import Reviews from "./../../components/cardPage/additionInformation/reviews/Reviews";
const AsyncCast = lazy(() =>
	import(
		"./../../components/cardPage/additionInformation/cast/Cast" /* webpackChunkName: "cast" */
	)
);
const AsyncReviews = lazy(() =>
	import(
		"./../../components/cardPage/additionInformation/reviews/Reviews" /* webpackChunkName: "reviews" */
	)
);

//Хелперы
const votePercent = (vote) => vote * 10;
const getYear = (date) => date.slice(0, 4);
const imagePosterPath = (src) => {
	if (src) {
		return `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${src}`;
	}
	return `https://via.placeholder.com/300x450?text=No poster`;
};
const imageBackdropPath = (src) => {
	if (src) {
		return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${src}`;
	}
	return `https://via.placeholder.com/1920x800?text=No poster`;
};

const MovieCard = ({ movieObj, onGoBack, match }) => {
	const {
		id,
		original_title,
		poster_path,
		backdrop_path,
		release_date,
		overview,
		genres,
		vote_average,
	} = movieObj;
	//console.log(backdrop_path);

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${imageBackdropPath(backdrop_path)})`,
				}}
			>
				<div className={style.cardWrapper}>
					<div className={style.img_wrapper}>
						<img
							alt={original_title}
							src={imagePosterPath(poster_path)}
							className={style.img}
						/>
					</div>
					<div className={style.descriptionWrapper}>
						<div>
							<h3 className={style.title}>
								{original_title} ({getYear(release_date)})
							</h3>
							<p>User Score: {votePercent(vote_average)}% </p>
						</div>
						<div>
							<h4 className={style.block_title}>Overview</h4>
							<p className={style.review}> {overview}</p>
						</div>

						<div className={style.genresWrapper}>
							<h4 className={style.block_title}>Genres</h4>
							<ul>
								{genres.length > 0 &&
									genres.map((i) => (
										<li key={i.id}>{i.name}</li>
									))}
							</ul>
						</div>

						<button className={style.goBackBtn} onClick={onGoBack}>
							&larr; Go Back
						</button>
					</div>
				</div>
			</div>
			<AdditionInformation />
			<hr className={style.hr} />
			<Suspense
				fallback={
					<div className={"loader"}>Please wait Loading...</div>
				}
			>
				<Route
					path={`${match.url}/cast`}
					render={(props) => <AsyncCast {...props} pageId={id} />}
				/>
				<Route
					path={`${match.url}/reviews`}
					render={(props) => <AsyncReviews {...props} pageId={id} />}
				/>
			</Suspense>
		</>
	);
};

MovieCard.propTypes = {
	movieObj: PropTypes.object.isRequired,
	onGoBack: PropTypes.func.isRequired,
};

export default withRouter(MovieCard);
