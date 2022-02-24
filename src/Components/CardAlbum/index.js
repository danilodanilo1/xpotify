import React, { useEffect } from "react";
import * as S from "./styles";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedAlbum } from "../../Actions/albumActions";
export default function CardAlbum({ item, setScreen }) {
  const token = useSelector((state) => state.tokenReducer.token);
  let images = item?.images.map((img) => img.url);
  let reducer = [images].map((item) => item[0]);
  const access_token = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setScreen(0);
    if (token) {
      dispatch(fetchSelectedAlbum({ access_token, id }));
    }
  };

  return (
    <S.Wrapper key={Math.random()}>
      <div>
        <img
          alt="album"
          onClick={() => handleClick(item.id)}
          src={reducer[0]}
        />
      </div>
      <S.ArtistData>
        <p>
          <strong>{item?.name}</strong>
        </p>
        <p>{item?.artists.map((art) => art.name)}</p>
      </S.ArtistData>
    </S.Wrapper>
  );
}

CardAlbum.propTypes = {
  images: PropTypes.array,
  reducer: PropTypes.array,
};
