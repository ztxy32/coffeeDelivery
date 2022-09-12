import styled, { css } from "styled-components";

interface FormFieldProps{
    fieldSize?: "small" | "regular" | "large"
}

export const CheckoutContainer = styled.div`
    background-color: ${({theme}) => theme.background};
    padding: 0px 160px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`
export const AdressInfo = styled.section`
    background-color: ${({theme}) => theme["base-card"]};
    padding: 40px;
`
export const AdressInfoDescription = styled.section`
    display: flex;
    flex-direction: row;
    div{
        margin-left: 8px;
    }
`
export const AdressInfoDescriptionTitle = styled.p`
    font-size: 1rem;
    color: ${({theme}) => theme["base-subtitled"]};
`
export const AdressInfoDescriptionSubtitle = styled.p`
    font-size: .875rem;
    color: ${({theme}) => theme["base-text"]};
`
export const PurchaseInfo = styled.section`
    background-color: ${({theme}) => theme["base-card"]};
`
export const AdressInfoFormSection = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: 560px;
    border-radius: 6px;
`
export const FormField = styled.input<FormFieldProps>`
    background-color: ${({theme}) => theme["base-button"]};
    border: none;
    //flex: 1;
    margin: 16px 12px;
    padding: 12px;
    border-radius: 4px;
    ${({fieldSize}) => 
        fieldSize == "small" ? 
            css`width: 85px;` : 
        fieldSize == "large" ? 
            css`width: 540px;` :
        fieldSize == "regular" ?
             css`width: 200px;` :
             css`width: 312px;`
        };
`
export const Subtitulo = styled.h1`
    color: ${({theme}) => theme["base-subtitled"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 15px;
`