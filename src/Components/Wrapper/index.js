import React from 'react'
import * as S from './styles'
export default function Wrapper(props) {
  return (
    <S.Wrapper>{props.children}</S.Wrapper>
  )
}
