import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  > div {
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
    background-color: #999999;
    > img {
      width: 250px;
      height: 250px;
    }
  }
  > p {
    font-size: 14px;
    /* padding:0 10px; */
    margin: 0;
  }
`;
export const Button = styled.button`
  display: flex;
  width: 70px;
  background: transparent;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  border: none;
  outline: none;
  margin-bottom: 10px;
  &:hover{
        transform: scale(1.1);
        transition: all 500ms;
      }
`;
export const ArtistData = styled.section`
  max-width: 250px;
`;

export const ListStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 30px;
  min-height: 600px;
  overflow-y: auto;
  flex-direction: column;
`;
export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
export const Separate = styled.div`
  display: flex;
  justify-content: center;
  > div {
    > strong {
      margin-left: 20px;
    }
  }
`;
export const SeparateButton = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 5px;
`;
