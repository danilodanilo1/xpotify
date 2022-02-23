import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  >.title{
    margin:10px 0px;
  }

  >.bottom{
    margin:10px 0px 20px 0;
  }
  > input {
    height: 50px;
    font-size: 48px;
    border: none;
    border-bottom: 1px solid #999999;
    outline: none;
    background-color: #2a2a2a;
    margin-right: 60px;
    color: #fff;
  }
`;