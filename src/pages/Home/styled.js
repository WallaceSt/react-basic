import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
    margin-bottom: 4rem;
`;

export const Input = styled.input`
    border: solid 1px #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;
    padding: 0 .5rem;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background-color: #000;
    color: #eee;
    border-radius: 0 .25rem .25rem 0;
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;