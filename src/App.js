import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setToken } from "./Actions/tokenActions";

import Home from "./Pages/Home";
import GlobalStyle from "./globalStyles";

class App extends Component {

 

  componentDidMount() {
    let token = process.env.REACT_APP_CLIENT_ID
    console.log(9999999, process.env.development)
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=b5951315635c486b831eeeab28fdc040&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:8080/callback";
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <Home  />
      </div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setToken,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
