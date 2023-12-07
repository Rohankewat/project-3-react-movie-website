import "./Trending.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {

    const [trends, setTrends] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=862c7c04735a5e805a443b8fdba66ee5').then(
            resp => resp.json()
        ).then(
            data => setTrends(data.results)
        )
    }, [])
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
        <div className="trends1">
            <h3>Trending</h3>
            <div className="trend_main_container">
                <Carousel responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    transitionDuration={2}>
                    {
                        trends.map(result => (
                            <Link to={`/movie/${result.id}`}>
                                <div>
                                    <div className="trending_image_icon">
                                        <img src={`https://image.tmdb.org/t/p/original${result ? result.poster_path : ""}`} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        </div>

    )
}

export default Trending;