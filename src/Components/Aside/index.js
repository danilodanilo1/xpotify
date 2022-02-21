import React from "react";
import iconSpotify from "../../Images/iconSpotify.svg";
import * as S from "./styles";

export default function Aside() {
  return (
    <S.Aside>
      <img src={iconSpotify} alt="logo" />
    </S.Aside>
  );
}
