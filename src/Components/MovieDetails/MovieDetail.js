import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const Movietails = () => {

    const [movieDetail, setMovieDetail] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=862c7c04735a5e805a443b8fdba66ee5&language=en-US`).then(
            response => response.json()
        ).then(
            data => setMovieDetail(data)
        )
    }, [])


    return (
        <div className="movie_big_container">
            <div className="cick_title">
                <h6>Click on Below image to Watch Full Movie</h6>
            </div>
            <div className="titleno_1">
                <Link to={`https://www.themoviedb.org/movie/${id}-abyzou/watch?locale=AU`} target="_blank">
                    <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.backdrop_path : ""}`} />
                </Link>
            </div>
            <div className="titleno_2">
                <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
            </div>
            <div className="detail_title">
                {movieDetail ? movieDetail.original_title : ""}
            </div>
            <div className="detail_tagline">
                {movieDetail ? movieDetail.tagline : ""}
            </div>
            <div className="lang">
                Original language : {movieDetail ? movieDetail.original_language : ""}
            </div>
            <div className="popu">
                Popularity : {movieDetail ? movieDetail.popularity : ""}
            </div>
            <div className="vote">
                Vote average : {movieDetail ? movieDetail.vote_average : ""}<i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="release_date">
                Release Date : {movieDetail ? movieDetail.release_date : ""}
            </div>
            <div className="synopsis">
                <h3>Synopsis</h3>
            </div>

            <div className="movi_details">
                {movieDetail ? movieDetail.overview : ""}
            </div>
        </div>
    )
}

export default Movietails;