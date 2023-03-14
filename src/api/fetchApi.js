import axios from 'axios';

 export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'f54499984816fc4c5f9a225c08a06c8d',
      query: query,
      page: page,
    },
  });

  return response.data;
};