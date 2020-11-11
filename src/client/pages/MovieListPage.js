import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions";
import { Helmet } from "react-helmet";

class MovieListPage extends Component {
  // Have state ready for both Movies and TvShows link clicks/direct requests
  componentDidMount() {
    if (this.props.movies) return;
    this.props.fetchMovies();
  }

  renderData() {
    return this.props.movies.results.map((movie) => {
      return (
        <div
          key={movie.id}
          className="card text-center m-3"
          style={{ width: "15rem" }}
        >
          <img
            className="card-img-top"
            alt="..."
            src={this.dynamicUrl(movie)}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text font-weight-light">{movie.release_date}</p>
            <a href={this.dynamicLink(movie)} className="btn btn-secondary">
              TMDB
            </a>
          </div>
        </div>
      );
    });
  }

  dynamicUrl(movie) {
    let url = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
    return url;
  }

  dynamicLink(movie) {
    let link = "https://www.themoviedb.org/movie/" + movie.id;
    return link;
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.movies.results.length} Movies Loaded`}</title>
        <meta property="og:title" content="Movies" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="container">
        {this.head()}
        <div className="row">{this.renderData()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

function loadData(store) {
  return store.dispatch(fetchMovies());
}

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid overlap of different loadData function imports in Routes

export default {
  loadData,
  component: connect(mapStateToProps, { fetchMovies })(MovieListPage),
};
