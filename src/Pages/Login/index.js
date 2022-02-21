import React from 'react'
import logo from '../../Images/spotify.svg'
import * as S from './styles'
import { connect } from 'react-redux';

 const Login = (props) => {
    const REACT_APP_CLIENT_ID = 'b5951315635c486b831eeeab28fdc040'
    const REACT_APP_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
    const REACT_APP_REDIRECT_URL = 'http://localhost:8080/home'

      const handleLogin = () => {
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
      };
  return (
    <S.Wrapper>  
        <img src={logo} alt="logo" />
        <button onClick={()=>handleLogin()}>Log in to Spotify</button>
    </S.Wrapper>
  )
}
export default connect()(Login);
