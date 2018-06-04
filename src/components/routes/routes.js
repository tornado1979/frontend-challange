import React from 'react'
// import routing components
import {
  Switch,
  Route,
} from 'react-router'

import Home from '../../modules/home/home'
import MovieDetails from '../../modules/movie/movieDetails'
import NotFound from '../../modules/notFound/notFound'

export const Routes = () => {
  return (
    <Switch>
      <Route
        component={Home}
        exact
        path="/frontend-challange"
      />
      <Route
        component={MovieDetails}
        path="/frontend-challange/:movieId"
      />
      <Route component={NotFound} />
    </Switch>
  )
}
