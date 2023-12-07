import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="Header">
            <Link to="/"><img src="https://th.bing.com/th/id/OIP.9DpogdhzeDoB6Cz-Z8vLkwAAAA?pid=ImgDet&rs=1" /></Link>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Reated</span></Link>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            <Link to="/movies/now_playing" style={{ textDecoration: "none" }}><span>Now playing</span></Link>
            <Link to="/movie_now/trend"><span>Trending</span></Link>
        </div>
    )
}

export default Header;