import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MovieList from './Components/Cards/MovieList/MovieList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Movietails from './Components/MovieDetails/MovieDetail';
import Trending from './Components/Trending/Trending';

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movietails />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
          <Route path="/movie_now/trend" element={<Trending />}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
