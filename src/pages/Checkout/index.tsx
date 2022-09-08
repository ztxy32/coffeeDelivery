import { MapPinLine } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, AdressInfo,PurchaseInfo, Subtitulo, AdressInfoDescription, AdressInfoDescriptionTitle, AdressInfoDescriptionSubtitle, AdressInfoFormSection } from "./styles";

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
                                    <input type="text" placeholder="CEP"/>
                                    <input type="text" placeholder="Rua"/>
                                    <input type="text" placeholder="Número"/>
                                    <input type="text" placeholder="Complemento"/>
                                    <input type="text" placeholder="Bairro"/>
                                    <input type="text" placeholder="Cidade"/>
                                    <input type="text" placeholder="UF"/>
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