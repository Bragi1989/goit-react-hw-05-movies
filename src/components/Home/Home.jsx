import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../../services/Api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    Api.getTrendingMovies().then((data) => setTrendingMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {trendingMovies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;