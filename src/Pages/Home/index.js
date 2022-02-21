import React, { useEffect } from "react";
import Aside from "../../Components/Aside";
import { getParamValues } from '../../Utils/functions';
import * as S from "./styles";
import Content from "../../Components/Content";
import Results from "../../Components/Results";
import SearchBar from "../../Components/SearchBar";
import  Wrapper  from '../../Components/Wrapper'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const mock = [
      {
        album: "Joao bidu da silva ramos de oliveira",
        artista: "Joao bidu da silva ramos de oliveira",
      },
      {
        album: "xispirito",
        artista: "roberto carlos",
      },
      {
        album: "sao mae ta vindo",
        artista: "Stifler bolado",
      },
      {
        album: "O retorno",
        artista: "Sorriso Maroto",
      },
      {
        album: "de volta para o amanha",
        artista: "Sorriso Maroto",
      },
      {
        album: "Belo",
        artista: "Belo",
      },
      {
        album: "Novo Horizonte",
        artista: "boca loka",
      },
      {
        album: "boca loka",
        artista: "Saiu de oliveira",
      },
      {
        album: "o coveiro",
        artista: "orriso",
      },
      {
        album: "os para",
        artista: "Os paralamas do sucesso",
      },
    ]
    const navigate = useNavigate()
    // const { setExpiryTime, history, location } = this.props;
    const location = document.location
    console.log(location)

    useEffect(() => {
      try {
        if (_.isEmpty(location.host)) {
          return navigate('/');
        }
        const access_token = getParamValues(location.host);
        const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
        localStorage.setItem('params', JSON.stringify(access_token));
        localStorage.setItem('expiry_time', expiryTime);
        return navigate('/home');
      } catch (error) {
        navigate('/');
      }
    
    }, [])

  

  return (
    <Wrapper>
      <Aside/>
      <Content>
        <SearchBar/>
        <Results mock={mock} />
      </Content>
    </Wrapper>
  );
}
