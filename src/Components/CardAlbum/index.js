import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export default function CardAlbum({ artista, album }) {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <div
        onClick={() => {
          navigate("/album");
        }}
      ></div>
      <S.ArtistData>
        <p>
          <strong>{album}</strong>
        </p>
        <p>{artista}</p>
      </S.ArtistData>
    </S.Wrapper>
  );
}
