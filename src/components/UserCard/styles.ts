import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #808080;
    border-radius: 25px;
`;

export const Photo = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 130px;
    padding: 130px;
    margin-bottom: 40px;
`;

export const Name = styled.Text `
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Login = styled.Text `
    font-size: 20px;
    margin-bottom: 10px;
`;

export const Location = styled.Text `
    font-size: 20px;
    margin-bottom: 10px;
`;