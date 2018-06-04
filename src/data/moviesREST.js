import api from '../config/app'

const {
  base: baseURL,
  movies,
} = api.REST.paths

export const getMoviesByQuery = (query) => {
  return fetch(`${baseURL}${movies}?query=${query}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
}
