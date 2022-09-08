import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    background-color: ${({theme}) => theme["base-card"]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 256px;
    height: 310px;
    img{
        margin-top: -60px;
        width: 120px;
        height: 120px;
    }
    border-radius: 6px 36px;
    padding: 20px;
    margin-right: 32px;
    margin-bottom: 40px;
`
export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
`
export const Tag = styled.p`
    color: ${({theme}) => theme["yellow-dark"]};
    font-size: 0.625rem;
    background-color: #F1E9C9;
    padding: 4px 8px;
    margin-right: 4px;
`
export const Title = styled.h1`
    font-size: 1.25rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme["base-subtitled"]};

`
export const Description = styled.p`
    font-size: 0.875;
    color: ${({theme}) => theme["base-label"]};
`

export const PurchaseSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 33px;
    >input::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
`
export const Price = styled.p`
    font-size: 1.5rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    color: ${({theme}) => theme["base-text"]};
`
export const Counter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: ${({theme}) => theme["base-button"]};
    width: 72px;
    height: 38px;
    border-radius: 6px;
    button{
        color: ${({theme}) => theme.purple};
        border: 0;
        font-size: 1rem;
        background-color: ${({theme}) => theme["base-button"]};
        cursor: pointer;
    }
    margin: 0px 16px;
`
export const PurchaseButton = styled.button`
    background-color: ${({theme}) => theme["purple-dark"]};
    border: 0;
    width: 38px;
    height: 38px;
    padding: 8px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`