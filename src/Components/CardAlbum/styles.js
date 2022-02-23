import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  > div {
    img {
      border: 1px solid #000;
      width: 200px;
      height: 200px;
      background-color: #999999;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
        transition: all 500ms;
      }
    }
  }
  > p {
    font-size: 14px;
    margin: 0;
  }
  @media (max-width: 768px) {
    > div {
      > img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;
export const ArtistData = styled.section`
  width: 200px;
  height: 80px;
  text-align: center;
  margin-bottom: 10px;
  > p {
    max-width: 200px;
    margin: 5px 0;
  }
`;
