import { MapPin, ShoppingCart } from "phosphor-react"
import CoffeDeliveryPng from "../../assets/coffeDeliveryLogo.png"
import { ActionsContainer, Carrinho, HeaderContainer, Local, CartLoad } from "./styles"

interface HeaderProps {
    produtosNoCarrinho?: number,
}

export function Header({produtosNoCarrinho = 0}: HeaderProps){
    return(
        <HeaderContainer>
            <img src={CoffeDeliveryPng} alt="" />
            <ActionsContainer>
                <Local>
                    <MapPin color="#8047F8" size={18} weight="fill"/> <span>Aracaju, SE</span>
                </Local>
                <Carrinho>
                    <ShoppingCart color="#C47F17" size={18} weight="fill"/>
                    {produtosNoCarrinho > 0 &&
                        <CartLoad>
                            {produtosNoCarrinho}
                        </CartLoad> 
                    }
                    
                </Carrinho>
            </ActionsContainer>
        </HeaderContainer>
    )
}