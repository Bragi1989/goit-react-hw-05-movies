import axios from 'axios';

const API_KEY = '117c7c107e7af0f4d9d4763ca17ce41d';
const apiUrl = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: API_KEY,
  },
});

const fetchTrending = async () => {
  try {
    const response = await instance.get('/trending/all/day'); // Правильний шлях для отримання популярних фільмів
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
    const response = await instance.get(`/movie/${movieId}`); // Правильний шлях для отримання деталей фільму
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

const getMovieCredits = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/credits`); // Правильний шлях для отримання акторського складу фільму
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

const getMovieReviews = async (movieId) => {
  try {
    const response = await instance.get(`/movie/${movieId}/reviews`); // Правильний шлях для отримання відгуків на фільм
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export { fetchTrending, searchMovies, getMovieDetails, getMovieCredits, getMovieReviews };