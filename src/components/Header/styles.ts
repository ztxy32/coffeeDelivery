import styled from "styled-components"

export const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 32px 160px;
    align-items: center;
    justify-content: space-between;
`
export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
`
export const Local = styled.div`
    background-color: ${({theme}) => theme["purple-light"]};
    padding: 8px;
    margin-right: 12px;
    border-radius: 6px;
    color: ${({theme}) => theme["purple-dark"]};
    display: flex;
    gap: 4px;
`
export const Carrinho = styled.div`
    background-color: ${({theme}) => theme["yellow-light"]};
    padding: 8px;
    border-radius: 6px;
    display: flex;
`
export const CartLoad = styled.span`
    position: absolute;
    font-size: 0.75rem;
    background-color: ${({theme}) => theme["yellow-dark"]};
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 10px;
    top: 29px;
    right: 154px;
`