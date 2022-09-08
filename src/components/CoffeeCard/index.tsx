import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"
import { useState } from "react"
import { CoffeeCardContainer, 
    Tag, PurchaseSection, 
    Title, 
    TagWrapper, 
    Description, 
    Price, 
    Counter, 
    PurchaseButton, 
} from "./styles"


interface CoffeeCardProps{
    coffeeType: string[]
    coffeeName: string
    coffeeDescription: string
    coffeePrice: number
    coffeeImg: string
    coffeeId: number
}

export function CoffeeCard({  
    coffeeType, 
    coffeeName, 
    coffeeDescription, 
    coffeePrice, 
    coffeeImg,
    coffeeId
}: CoffeeCardProps){
    const [quantity, setQuantity] = useState(0)
    function handleIncrease(){
        setQuantity(quantity+1)
    }
    function handleDecrease(){
        setQuantity(quantity-1)
    }
    return(
            <CoffeeCardContainer>
                <img src={coffeeImg} alt="" />

                <TagWrapper>
                    {coffeeType.map(item => <Tag>{item}</Tag>)}
                </TagWrapper>

                <Title>
                    {coffeeName}
                </Title>

                <Description>
                    {coffeeDescription}
                </Description>

                <PurchaseSection>
                    <Price>{coffeePrice}</Price>
                    <Counter>
                        <button onClick={handleDecrease}><Minus/></button>
                            <p>{quantity}</p>
                        <button onClick={handleIncrease}><Plus/></button>
                    </Counter>
                    <PurchaseButton onClick={() => alert(`café: ${coffeeId}\npreço: ${coffeePrice}\nquantidade: ${quantity}`)}>
                        <ShoppingCartSimple size={22} color="#F3F2F2" weight="fill"/>
                    </PurchaseButton>
                </PurchaseSection>
            </CoffeeCardContainer>
    )
}