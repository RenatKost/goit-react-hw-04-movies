import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "2e8cbd0e58e777a94962ffcc6316ffba";

//список самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const popularRequest = (media_type = "all", time_window = "day") => {
	return axios.get(
		`${BASE_URL}/3/trending/${media_type}/${time_window}?api_key=${API_KEY}`
	);
};

//поиск кинофильма по ключевому слову на странице фильмов.
export const serchRequest = (qwery) => {
	return axios.request(
		`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${qwery}&page=1&include_adult=false`
	);
};

//запрос полной информации о фильме для страницы кинофильма.
export const movieIdRequest = (movie_id) => {
	return axios.get(`${BASE_URL}/3/movie/${movie_id}?api_key=${API_KEY}`);
};

//запрос информации о актёрском составе для страницы кинофильма.
export const actorsRequest = (movie_id) => {
	return axios.request(
		`${BASE_URL}/3/movie/${movie_id}/credits?api_key=${API_KEY}`
	);
};

//запрос обзоров для страницы кинофильма.
export const reviewRequest = (movie_id) => {
	return axios.request(
		`${BASE_URL}/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
	);
};

//Картинки
//https://image.tmdb.org/t/p/w300_and_h450_bestv2/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg
//https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg
