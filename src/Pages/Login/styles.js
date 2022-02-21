import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    >img{
        width: 230px;
        height: 230px;
    }
    >button{
        border-radius: 20px;
        background-color: #19E68C;
        color:#fff;
        width: 300px;
        height: 50px;
        font-size: 20px;
        font-weight: bold;
        outline: none;
        border:none;
        cursor: pointer;
    }
`