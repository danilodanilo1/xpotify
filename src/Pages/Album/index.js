import React, { useEffect, useState } from "react";
import Wrapper from "../../Components/Wrapper";
import Content from "../../Components/Content";
import * as S from "./styles";
import moment from "moment";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function Album({ setScreen }) {
  const nameAlbum = useSelector((state) => state.albumsReducer.selected?.name);
  const nameArtist = useSelector(
    (state) => state.albumsReducer.selected?.artists
  );
  const imgAlbum = useSelector((state) => state.albumsReducer.selected);
  const tracks = useSelector((state) => state.albumsReducer.selected);
  const loader = useSelector((state) => state.albumsReducer.fetchAlbumsPending);
  let images = imgAlbum?.images?.map((img) => img.url);
  images?.splice(2);
  let trackAlbum = tracks?.tracks?.items;

  const Card = () => {
    return (
      <S.CardStyle>
        <div>
          {loader ? (
            <Audio height="100" width="100" color="grey" ariaLabel="loading" />
          ) : (
            <img src={images?.splice(1, 2)} alt="imageAlbum" />
          )}
        </div>
        <S.ArtistData>
          <p>
            <strong>{nameAlbum}</strong>
          </p>
          <p>{nameArtist?.map((item) => item.name)}</p>
        </S.ArtistData>
      </S.CardStyle>
    );
  };

  const Line = ({ item, id }) => {
    return (
      <S.Line key={id}>
        <S.Separate>
          <div>{item.track_number}</div>
          <div>
            <strong>{item.name}</strong>
          </div>
        </S.Separate>
        <div>
          <div>{moment.utc(item.duration_ms).format("mm:ss")}</div>
        </div>
      </S.Line>
    );
  };

  const List = () => {
    return (
      <S.ListStyle>
        {trackAlbum?.map((item, i) => (
          <Line key={i} item={item} />
        ))}
      </S.ListStyle>
    );
  };

  return (
    <Wrapper>
      <Content>
        <S.SeparateButton>
          <S.Button onClick={() => setScreen(1)}> {"< voltar"}</S.Button>
        </S.SeparateButton>
        <S.Section>
          <Card />
          {loader ? (
            <Audio height="100" width="100" color="grey" ariaLabel="loading" />
          ) : (
            <List />
          )}
        </S.Section>
      </Content>
    </Wrapper>
  );
}
