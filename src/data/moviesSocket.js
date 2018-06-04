import socketClient from 'socket.io-client'

import api from '../config/app'

const socketConfig = api.socket

const getMoviesChannelConnectionString = token => socketConfig.channels.movies.prefix + token
export const connection = socketClient(socketConfig.paths.movies)
connection.on('connect', () => {
  console.log('connected to socket')  // eslint-disable-line
})

connection.on('error', (error) => {
  console.log(error) // eslint-disable-line
})

export function subscribeConnectionForToken(token, handler) {
  connection.on(getMoviesChannelConnectionString(token), handler)
}

export function unsubscribeConnectionForToken(token, handler) {
  console.log('unsubscribing') // eslint-disable-line
  connection.off(getMoviesChannelConnectionString(token), handler)
}
