This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents
- [About](#about)
- [Workflow](#workflow)
- [Technical Workflow](#technical-workflow)
- [Folder Structure](#folder-structure)
- [Run local](#run-local)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [youtube presentation](#youtube-presentation)
- [Todo](#todo)


## About
* It is a react + redux + web sockets + redux saga web app that fetches movies data from 'https://sbot-fe-test.herokuapp.com' and publish them to the end user. 
* It makes a socket connection to the server andfetches movies data.

[a quick visual of the web-app](readme_imgs/movies-socket.gif)


- Functionalities:
  - movies search realtime.
  - application connects with web sockets to the server and fetches data until it disconnects
  - change movies view.
  - movie details page

* It is written in reactjs + reduxjs mainly and also:
- redux-saga
- socket.io-client
- prop-types
- lodash
- sass
- webpack
- eslint with airbnb

## Workflow

* Init: user searches a movie on the text box and press enter or 'go'.
* a socket connection between the client and server, is done and the movies downloading on the browser.
* The data are consumed and the store is updated with the movies.
* The state , after 'SEARCH_MOVIES_SUCCESS', looks like this:
  ```
  {
    display: {
      viewMode: "VIEW_MODE_LARGE" or "VIEW_MODE_MEDIUM" or "VIEW_MODE_SMALL"
    },
    movies: {
      data: [{},{}],
      errorMessage:null,
      isLoading: false,
    }
    routing: {
      location: {
        pathname: "/movies-socket",
        search: "",
        hash: "",
        key: ""
      }
    }
  }
  ```


## Technical Workflow
1. The app loads and the store is created and initialised, as long as 'redux-saga' runs and a .
2. All the actions follow this procedure:
 action -> actionCreator -> reducer -> update the state <- selector gets state data -> update the component
2. For style i use custom sass. As for the webpack to convert the scss custom files to css, i added this snipet, on the webpack config file.
  ```
  {
    test: /\.scss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "sass-loader" // compiles Sass to CSS
    }]
  },
  ```

## Folder structure

I have run `npm run eject`, in order to have better control over, 
webpack, eslint etc.

The structure of the project is this:
```
app/
  assets/
    img/
      notFound/
  components/
    block/
    footer/
    header/
    loader/
    mainBlock/
    percent/
    routes/
    search/
    viewMode/
  config/
    app.js
  data/
    footerData.js
    moviesRest.js
    moviesSocket.js
  helpers/
    history.js
  modules/
    home/
    movie/
    notFound/
  services/
    search.js
  App.js
  App.scss
  constant.js
  index.js
  rootReducers.js
  sagas.js
  store.js
  .eslintrc
  package.json
  postcss.config.js
  README.md
```

## Run local

In order to run localhost you shoul:

* download/clone the repo to a folder
* execute npm install to install all the dependencies
* npm run start
* open your browser on http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

By executing `npm run build`, the build folder is creaded and insided the code 
is minified.
We can run the server by executing: `serve -s build`


### `npm run eject`

I have executed this script so, all the hidden files are now visible on the project.
Some useful files are the webpack configuration, which i used to add the 
pre-processor sass.

## Todo

* add unit tests
