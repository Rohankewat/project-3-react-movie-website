import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./MovieList.css";
import Cards from "../Cards";
import Trending from "../../Trending/Trending";

const MovieList = () => {

    const [movieDet, setMovieDet] = useState([]);
    const { type } = useParams()

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        fetchData()
    }, [type])


    const fetchData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=862c7c04735a5e805a443b8fdba66ee5&language=en-US&page=1`).then(
            resp => resp.json()
        ).then(
            data => setMovieDet(data.results)
        )
    }
    return (
        <div className="movieList_Container">
            <div className="MovieList_Heading">
                <h2>{type ? type : "popular"}</h2>
            </div>
            <div>
                {
                    movieDet.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;