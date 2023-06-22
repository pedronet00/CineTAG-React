import axios from 'axios';

const apiKey = 'f23cd4c1115c87d196a272940dbfc80e';

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao obter os filmes populares:', error);
    return [];
  }
};

export { getPopularMovies };