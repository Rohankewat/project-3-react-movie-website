import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./MultiCor1.css";


const MultiCor1 = () => {

    const [movieImage, setMovieImage] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=862c7c04735a5e805a443b8fdba66ee5&language=en-US&page=1").then(
            resp => resp.json()
        ).then(
            data => setMovieImage(data.results)
        )
    })

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <h2 className="heading1">Now Playing</h2>
            <div className="carousel_container">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    transitionDuration={2}>
                    {
                        movieImage.map(result => (
                            <Link to={`/movie/${result.id}`}>
                                <div className="container">
                                    <img src={`https://image.tmdb.org/t/p/original${result ? result.backdrop_path : ""}`} />
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default MultiCor1;