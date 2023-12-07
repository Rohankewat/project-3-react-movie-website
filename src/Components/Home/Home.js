import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MultiCor1 from "../MultCourosel/MultiCor1";
import MovieList from "../Cards/MovieList/MovieList";



const Home = () => {

    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=862c7c04735a5e805a443b8fdba66ee5&language=en-US&page=1").then(
            res => res.json()
        ).then(
            data => setMovieDetails(data.results)
        )
    }, [])
    return (
        <div className="Home_container">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={2}
                showThumbs={false}>
                {
                    movieDetails.map(fetchDetails => (
                        <Link to={`/movie/${fetchDetails.id}`} style={{ textDecoration: "none" }}>
                            <div className="link_container">
                                <div className="image_icon">
                                    <img src={`https://image.tmdb.org/t/p/original${fetchDetails ? fetchDetails.backdrop_path : ""}`} />
                                </div>
                                <div className="home_title">
                                    {fetchDetails ? fetchDetails.original_title : ""}
                                </div>
                                <div className="home_release_date">
                                    {fetchDetails ? fetchDetails.release_date : ""}
                                </div>
                                <div className="home_vote">
                                    {fetchDetails ? fetchDetails.vote_average : ""}<i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                                <div className="home_detail">
                                    {fetchDetails ? fetchDetails.overview : ""}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
            <MultiCor1 />
            <MovieList />
        </div>
    )
}

export default Home;