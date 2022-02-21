import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
  > div {
    border: 1px solid #000;
    width: 200px;
    height: 200px;
    background-color: #999999;
    cursor: pointer;
  }
  > p {
    font-size: 14px;
    margin: 0;
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
