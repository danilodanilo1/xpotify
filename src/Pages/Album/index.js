import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aside from "../../Components/Aside";
import Wrapper from "../../Components/Wrapper";
import Content from "../../Components/Content";
import axios from "axios";
import * as S from "./styles";


export default function Album() {
  const mock=[
    {
      num: "1",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "2",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "3",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "4",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "5",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "6",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "7",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "8",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "9",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "10",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "11",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "9",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "10",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    {
      num: "11",
      nome:"Nome da Faixa",
      duracao:"3:34"
    },
    
  ]
  const [token, setToken] = useState()
  const navigate = useNavigate()
  const Card = () => {
    return (
      <S.CardStyle>
        <div></div>
        <S.ArtistData>
          <p>
            <strong>nome do album aqdasdasdswui bem grandao</strong>
          </p>
          <p>nome do album aqui bem grandao</p>
        </S.ArtistData>
      </S.CardStyle>
    );
  };

  const Line = ({item, id}) => {
    return (
      <S.Line key={id}>
        <S.Separate>
          <div>{item.num}</div>
          <div><strong>{item.nome}</strong></div>
        </S.Separate>
        <div>
          <div>{item.duracao}</div>
        </div>
      </S.Line>
    );
  };
  const List = () => {
    return (
      <S.ListStyle>
        {mock.map((item, i) => (
          <Line id={i} item={item} />
        ))}
      </S.ListStyle>
    );
  };


  // useEffect(()=>{
  //   const initialState = () => {
  //     axios('https://account.spotify.com/api/token', {
  //       headers:{
  //         'Content-type' : 'application/x-www.form-urlencoded',
  //         'Authorization' : 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
  //       },
  //       data:'grant_type-client_credentials',
  //       method:'POST'
  //     })
  //     .then(tokenResponse => {
  //       console.log(tokenResponse.data.access_token)
  //       setToken(tokenResponse.data.access_token)
  //     })
  //   }
  //   initialState()
  // },[])
  return (
    <Wrapper>
      <Aside />
      <Content>
        <S.SeparateButton>
          <S.Button onClick={()=> navigate('/')}> voltar </S.Button>
        </S.SeparateButton>
        <S.Section>
          <Card />
          <List />
        </S.Section>
      </Content>
    </Wrapper>
  );
}
