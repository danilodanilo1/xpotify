import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import { searchAllAlbums } from "../../Actions/albumActions";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = (props) => {
  const token = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("");

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
      const timer = setTimeout(() => setDebouncedValue(value), delay || 300);

      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedValue = useDebounce(searchTerm, 300);

  useEffect(() => {
    if(searchTerm !== ""){
      return dispatch(searchAllAlbums(searchTerm, token));
    }
  }, [debouncedValue, token]);

 
  return (
    <S.SearchBarStyle>
      <p className="title">Busque por artistas, album ou músicas</p>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Comece a escrever"
      />
      <p className="bottom">
        {debouncedValue
          ? `Resultados encontrados para "${debouncedValue}"`
          : "Últimos albums ouvidos: "}
      </p>
    </S.SearchBarStyle>
  );
}

SearchBar.propTypes = {
  searchAllAlbums: PropTypes.func,
  token: PropTypes.string,
  searchTerm: PropTypes.string,
};

export default SearchBar;
