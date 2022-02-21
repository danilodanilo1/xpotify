import React from "react";
import * as S from "./styles";
import CardAlbum from "../../Components/CardAlbum";



export default function Results({mock}) {
  return (
    <S.ResultsStyle>
      <p>Resultados encontrados para "Bob"</p>
      <div>
        {mock.map((album, i) => (
          <CardAlbum key={i} artista={album.artista} album={album.album} />
        ))}
      </div>
    </S.ResultsStyle>
  );
}
