import { MapPinLine } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, AdressInfo,PurchaseInfo, Subtitulo, AdressInfoDescription, AdressInfoDescriptionTitle, AdressInfoDescriptionSubtitle, AdressInfoFormSection, FormField } from "./styles";

export function Checkout(){
    return (
        <>
            <Header/>
            <CheckoutContainer>
                <div>
                    <Subtitulo>Complete seu pedido</Subtitulo>
                        <AdressInfo>
                            <AdressInfoDescription>
                                <MapPinLine color="#C47F17" size={22} />
                                <div>
                                    <AdressInfoDescriptionTitle>Endereço de Entrega</AdressInfoDescriptionTitle>
                                    <AdressInfoDescriptionSubtitle>Informe o endereço onde deseja receber seu pedido</AdressInfoDescriptionSubtitle>
                                </div>
                            </AdressInfoDescription>

                            <AdressInfoFormSection>
                                <form action="">
                                    <FormField type="text" placeholder="CEP" fieldSize="regular"/>
                                    <FormField type="text" placeholder="Rua" fieldSize="large"/>
                                    <FormField type="text" placeholder="Número" fieldSize="regular"/>
                                    <FormField type="text" placeholder="Complemento"/>
                                    <FormField type="text" placeholder="Bairro" fieldSize="regular"/>
                                    <FormField type="text" placeholder="Cidade" fieldSize="regular"/>
                                    <FormField type="text" placeholder="UF" fieldSize="small"/>
                                </form>
                            </AdressInfoFormSection>
                        </AdressInfo>
                </div>
                <div>
                <Subtitulo>Cafés seleccionados</Subtitulo>
                    <PurchaseInfo>
                    </PurchaseInfo>
                </div>
                    
                
            </CheckoutContainer>
        </>
    )
}