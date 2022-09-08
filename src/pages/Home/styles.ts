import styled from "styled-components";

export const HomeContainer = styled.main`
    background-color: ${({theme}) => theme.background};
    padding: 0px 160px;
`
export const IntroContainer = styled.article`
    display: flex;
    flex-direction: row;
    padding: 94px 0px;
    //height: 544px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h1`
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${({theme}) => theme["base-tytle"]};
    margin-bottom: 16px;
`
export const Subtitle = styled.h2`
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${({theme}) => theme["base-tytle"]};
    //margin-bottom: 43px;
`
export const Description = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${({theme}) => theme["base-subtitled"]};
    margin-bottom: 66px;
`
export const ImageContainer = styled.div`
    margin-left:56px;
`
export const List = styled.ul`
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${({theme}) => theme["base-text"]};
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding: 0;
`
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
        margin-right: 12px;
    }
`
export const CoffeeList = styled.section`
    //padding: 128px 160px;
`
export const CoffeeWrapper = styled.div`
    width: 1120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 54px;    
`