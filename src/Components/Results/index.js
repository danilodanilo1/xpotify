import React, { useEffect, useState } from "react";
import * as S from "./styles";
import CardAlbum from "../CardAlbum";
import { fetchAlbums } from "../../Actions/albumActions";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";



export default function Results(props) {
  const token = useSelector((state) => state.tokenReducer.token);
  const lastAlbums = useSelector((state) => state?.albumsReducer);
  const searchAlbum = useSelector((state) => state.songsReducer.albumSearch);
  const [list, setList] = useState(1)
  const dispatch = useDispatch();
  
  useEffect(() => {
    searchAlbum?.items?.length > 0 ?
    setList(1) :
    setList(0)
  }, [searchAlbum]);

  useEffect(() => {
    if(token){
      dispatch(fetchAlbums(token));
    }
  }, [token]);
  
  return (
    <S.ResultsStyle>
      <div>
        {list === 1 ? searchAlbum?.items?.map((item) => (
          <CardAlbum setScreen={props.setScreen} key={Math.random()}  item={item} />
        )) : list === 0 ?
        lastAlbums?.albums?.map((item) => (
          <CardAlbum setScreen={props.setScreen} key={Math.random()}  item={item.album} />
        )) : ""}
      </div>
    </S.ResultsStyle>
  );
}

Results.propTypes={
  token: PropTypes.string,
  list: PropTypes.number,
  lastAlbums: PropTypes.array,
}
