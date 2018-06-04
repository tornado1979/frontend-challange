import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import classnames from 'classnames'

import {
  getData,
  isLoading,
} from './selectors'

import {
  getViewMode,
} from '../../components/viewMode/selectors'

import {
  searchMoviesRequest,
} from './actionCreators'

import {
  changeViewMode,
} from '../../components/viewMode/actionCreators'

import { Percent } from '../../components/percent'
import { Search } from '../../components/search'
import { Loader } from '../../components/loader'
import { ViewMode } from '../../components/viewMode'

import './main.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: '',
    }
    this.goto = this.goto.bind(this)
    this.changeView = this.changeView.bind(this)
    this.fetchMovies = this.fetchMovies.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  getMovies() {
    if (this.state.movies.length > 0) {
      return <div>movies loaded</div>
    }
    return false
  }

  fetchMovies() {
    this.props.searchMovies(this.state.searchString)
  }

  createMovies(movies) {
    const {
      viewMode,
    } = this.props

    // panel class gets view mode : VIEW_MODE_LARGE, VIEW_MODE_MEDIUM, VIEW_MODE_SMALL
    const panelClass = classnames({
      panel: true,
      [`${viewMode}`]: true,
    })

    let moviesDOM

    if (movies && movies.length > 0) {
      moviesDOM = movies.map((movie) => {
        let movieReleaseDate = moment(movie.release_date) // eslint-disable-line prefer-const
        return (
          <div className={panelClass} key={movie.id}>
            <div className="panel-img">
              <img alt="movie" src={movie.full_poster_path} />
            </div>
            <div className="panel-body">
              <div className="wrap-panel-top">
                <Percent
                  vote_average={movie.vote_average * 10}
                />
                <div>
                  <p className="panel-title">{movie.title}</p>
                  <p className="panel-date">{movieReleaseDate.format('MMMM DD, YYYY')} </p>
                </div>
              </div>
              <p className="panel-text">{movie.overview}</p>
              <p className="view-more">
                <button onClick={() => this.goto(`/movies-socket/${movie.id}`)}>
                  more info
                </button>
              </p>
            </div>
          </div>)
      })
    }

    return moviesDOM
  }

  goto(location) {
    this.props.changeRoute(location)
  }

  changeHandler(event) {
    // if user press 'enter', dispatch SEARCH_MOVIES action
    if (event.keyCode === 13) {
      this.fetchMovies()
    }
    // update state with the searchString
    this.setState({
      searchString: event.target.value,
    })
  }

  changeView(e) {
    this.props.alterViewMode(e.target.value)
  }

  render() {
    const {
      loading,
      movies,
    } = this.props

    const moviesData = this.createMovies(movies)
    return (
      <main>
        <div className="search-bar">
          <ViewMode
            change={this.changeView}
          />
          <Search
            change={this.changeHandler}
            click={this.fetchMovies}
          />
        </div>
        <div className="wrapper">
          {moviesData}
          {loading && <Loader />}
          {!loading && movies.length === 0
           &&
           <div>
             <h1>Please search your favorite movie..</h1>
           </div>}
        </div>
      </main>
    )
  }
}

Home.propTypes = {
  alterViewMode: propTypes.func.isRequired,
  changeRoute: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  movies: propTypes.array.isRequired, // eslint-disable-line
  searchMovies: propTypes.func.isRequired,
  viewMode: propTypes.string.isRequired,
}

const mapStateToProps = state => ({
  loading: isLoading(state),
  movies: getData(state),
  viewMode: getViewMode(state),
})


const mapDispatchToProps = dispatch => bindActionCreators({
  alterViewMode: changeViewMode,
  changeRoute: location => push(location),
  searchMovies: searchMoviesRequest,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
