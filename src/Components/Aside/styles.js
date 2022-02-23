import styled from "styled-components";

export const Aside = styled.aside`
  background-color: #2a2a2a;
  width: 8rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  > img {
    width: 80px;
    height: 80px;
    margin-top: 15px;
  }
  
  @media (max-width: 768px){
    width: 5rem;
    > img {
    width: 2rem;
    height: 2rem;
    margin-top: 15px;
  }
}
`;