import axios from 'axios';

const API_KEY = '117c7c107e7af0f4d9d4763ca17ce41d';
const apiUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: API_KEY,
  },
});

const getTrendingMovies = async () => {
  try {
    const response = await instance.get('/trending/all/day');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

const searchMovies = async (query) => {
  try {
    const response = await instance.get('/search/movie', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

const getMovieDetails = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

const getMovieCredits = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

const getMovieReviews = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
const getActorDetails = async (actorId) => {
  try {
    const response = await instance.get(`/person/${actorId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching actor details:', error);
    throw error;
  }
};

export {
  getTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getActorDetails,
};