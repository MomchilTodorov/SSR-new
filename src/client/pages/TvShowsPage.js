import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTvshows } from "../../actions";
import { Helmet } from "react-helmet";

class TvShowsPage extends Component {
  // Have state ready for both Movies and TvShows link clicks/direct requests
  componentDidMount() {
    if (this.props.tvshows) return;
    this.props.fetchTvshows();
  }

  renderData() {
    return this.props.tvshows.results.map((tvshow) => {
      return (
        <div
          key={tvshow.id}
          className="card text-center m-3"
          style={{ width: "15rem" }}
        >
          <img
            className="card-img-top"
            alt="..."
            src={this.dynamicUrl(tvshow)}
          />
          <div className="card-body">
            <h5 className="card-title">{tvshow.name}</h5>
            <p className="card-text font-weight-light">
              {tvshow.first_air_date}
            </p>
            <a href={this.dynamicLink(tvshow)} className="btn btn-secondary">
              TMDB
            </a>
          </div>
        </div>
      );
    });
  }

  dynamicUrl(tvshow) {
    var link = "https://image.tmdb.org/t/p/w200/" + tvshow.poster_path;
    return link;
  }

  dynamicLink(tvshow) {
    let link = "https://www.themoviedb.org/tv/" + tvshow.id;
    return link;
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.tvshows.results.length} TVShows Loaded`}</title>
        <meta property="og:title" content="TVShows" />
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
  return { tvshows: state.tvshows };
}

function loadData(store) {
  return store.dispatch(fetchTvshows());
}

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid overlap of different loadData function imports in Routes

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTvshows })(TvShowsPage),
};
