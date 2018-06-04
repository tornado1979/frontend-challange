import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import moment from 'moment'

import './movie.scss'

import {
  getMovie,
} from '../home/selectors'

import NotFound from '../../modules/notFound/notFound'

class MovieDetails extends Component { // eslint-disable-line
  render() {
    const {
      movie,
    } = this.props

    if (!movie) {
      return (
        // <main><div className="wrapper">no movie!</div></main>
        <main>
          <NotFound />
        </main>
      )
    }

    const sheets = document.styleSheets
    const selector = '.movie-wrapper::before'
    const replacementBG = `url(${movie.full_backdrop_path})`

    // replace background-image
    /* eslint-disable no-restricted-syntax */
    for (const sheet of sheets) {
      if (sheet.href !== 'https://fonts.googleapis.com/css?family=Montserrat') {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText === selector) {
            rule.style.backgroundImage = replacementBG
          }
        }
      }
    }
    const movieReleaseDate = moment(movie.release_date)
    return (
      <main>
        {movie &&
          <div className="top-wrapper">
            <div className="movie-wrapper">
              <div className="custom-bg">
                <div className="panel">
                  <div className="img">
                    <img alt="movie" src={`${movie.full_poster_path}`} />
                  </div>
                  <div className="body">
                    <div className="wrap-body">
                      <div>
                        <p className="title">{movie.title}<span className="date">({movieReleaseDate.format('YYYY')})</span></p>
                        <p>Original Language ({movie.original_language})</p>
                      </div>
                      <div className="overview">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </main>
    )
  }
}

MovieDetails.propTypes = {
  movie: propTypes.shape().isRequired,
}

const mapStateToProps = state => ({
  movie: getMovie(state),
})

export default connect(mapStateToProps, null)(MovieDetails)
