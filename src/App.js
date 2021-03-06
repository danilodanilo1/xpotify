import React, { useEffect } from "react";
import { setToken } from "./Actions/tokenActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./Pages/Home";
import GlobalStyle from "./globalStyles";
import { useDispatch } from "react-redux";
export default function App(){
  const dispatch = useDispatch()
  useEffect(()=>{
    // let token = process.env.NODE_ENV.REACT_APP_CLIENT_ID
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
      setToken(hashParams.access_token);
    }
    return dispatch(setToken(hashParams.access_token))

  },[])

  return (
    <div className="App">
      <GlobalStyle/>
      <Home  />
    </div>
  );
}
