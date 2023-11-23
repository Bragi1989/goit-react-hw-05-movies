import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../../services/Api';
import css from '../Home/Home.module.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    Api.getTrendingMovies().then((data) => setTrendingMovies(data.results));
  }, []);

  return (
    <div className={css.sectionForm}>
      <h1>Trending Movies</h1>
      {trendingMovies.map((movie) => (
            <div className={css.sectionList} key={movie.id}>
               <Link className={css.sectionLink} to={`/movies/${movie.id}`}>{movie.title}</Link>
            </div>
      ))}
    </div>
  );
}

export default Home;