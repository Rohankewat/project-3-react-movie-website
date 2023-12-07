import { useEffect, useState } from "react";
import "./Cards.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true);

    setInterval(() => {
        setIsLoading(false)
    }, 1000)

    return (
        <div className="extra_box">
            <div className="Cards_mainContainer">
                <div>
                    {
                        isLoading
                            ?
                            <SkeletonTheme  >
                                <Skeleton className="cards_main_container" style={{ width: "200px", height: "250px", margin: "2px" }} highlightColor="#454545" />
                            </SkeletonTheme>
                            :
                            <Link to={`/movie/${movie.id}`}>
                                <div className="cards_main_container">
                                    <div className="Cards_image_icon">
                                        <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                                    </div>
                                    <div className="detail_discription">
                                        <div className="movi_title">
                                            {movie ? movie.original_title : ""}
                                        </div>
                                        <div className="movi_release">
                                            {movie ? movie.release_date : ""}
                                        </div>
                                        <div className="movie_vote_average">
                                            {movie ? movie.vote_average : ""}<i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="movie_detailed">
                                            {movie ? movie.overview.slice(0, 100) + "...." : ""}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;