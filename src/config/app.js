const API_BASE_PATH = 'https://sbot-fe-test.herokuapp.com'
const API_MOVIES_RESOURCE = '/movies'


export default {
  REST: {
    paths: {
      base: `${API_BASE_PATH}/api/v1`,
      movies: API_MOVIES_RESOURCE,
    },
    timeout: 10000,
  },
  socket: {
    channels: {
      movies: {
        prefix: 'movies.',
      },
    },
    paths: {
      movies: API_BASE_PATH,
    },
  },
}
