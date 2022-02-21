import styled from "styled-components";

export const ResultsStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    max-width: auto;
    flex-flow: row wrap;
  }
`;