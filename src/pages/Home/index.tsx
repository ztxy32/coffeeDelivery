import { Header } from "../../components/Header"
import { Content, HomeContainer, ImageContainer, IntroContainer, List, ListItem, Description, Title, Subtitle, CoffeeWrapper, CoffeeList } from "./styles"
import CafeDeliveryImgPng from "../../assets/cafe.png"
import BoxPng from "../../assets/box.png"
import CartPng from "../../assets/cart.png"
import CoffeePng from "../../assets/coffee.png"
import CronometroPng from "../../assets/cronometro.png"

//coffee Imgs
import TradicionalExpressCoffee from "../../assets/expresso_tradicional.png"
import AmericanExpressCoffee from "../../assets/expresso_americano.png"
import CreamExpressCoffee from "../../assets/expresso_cremoso.png"
import IceExpressCoffee from "../../assets/expresso_gelado.png"
import CoffeeWithMilk from "../../assets/cafe_com_leite.png"
import Latte from "../../assets/latte.png"
import Capuccino from "../../assets/capuccino.png"
import Macchiato from "../../assets/macchiato.png"
import Mocaccino from "../../assets/mocaccino.png"
import HotChocolate from "../../assets/chocolate_quente.png"
import Cuban from "../../assets/cubano.png"
import Havaian from "../../assets/havaiano.png"
import Arabic from "../../assets/arabe.png"
import Irish from "../../assets/irlandes.png"


import { CoffeeCard } from "../../components/CoffeeCard"


const coffeeMenu = [{
    coffeeType: ["TRADITIONAL"],
    coffeeName: "Expresso Tradicional",
    coffeeDescription: "O tradicional café feito com água quente e grãos moídos",
    coffeePrice: 9.90,
    coffeeId: 1,
    coffeeImg: TradicionalExpressCoffee
},
{
    coffeeType: ["TRADITIONAL"],
    coffeeName: "Expresso Americano",
    coffeeDescription: "Expresso diluído, menos intenso que o tradicional",
    coffeePrice: 9.90,
    coffeeId: 2,
    coffeeImg: AmericanExpressCoffee
},
{
    coffeeType: ["TRADITIONAL"],
    coffeeName: "Expresso Cremoso",
    coffeeDescription: "Café expresso tradicional com espuma cremosa",
    coffeePrice: 9.90,
    coffeeId: 3,
    coffeeImg: CreamExpressCoffee
},
{
    coffeeType: ["TRADITIONAL", "GELADO"],
    coffeeName: "Expresso Gelado",
    coffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
    coffeePrice: 9.90,
    coffeeId: 4,
    coffeeImg: IceExpressCoffee
},
{
    coffeeType: ["TRADITIONAL", "COM LEITE"],
    coffeeName: "Café com Leite",
    coffeeDescription: "Meio a meio de expresso tradicional com leite vaporizado",
    coffeePrice: 9.90,
    coffeeId: 5,
    coffeeImg: CoffeeWithMilk
},
{
    coffeeType: ["TRADITIONAL", "COM LEITE"],
    coffeeName: "Latte",
    coffeeDescription: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    coffeePrice: 9.90,
    coffeeId: 6,
    coffeeImg: Latte
},
{
    coffeeType: ["TRADITIONAL", "COM LEITE"],
    coffeeName: "Capuccino",
    coffeeDescription: "Bebida com canela feita de doses iguais de café, leite e espuma",
    coffeePrice: 9.90,
    coffeeId: 7,
    coffeeImg: Capuccino
},
{
    coffeeType: ["TRADITIONAL", "COM LEITE"],
    coffeeName: "Macchiato",
    coffeeDescription: "Café expresso misturado com um pouco de leite quente e espuma",
    coffeePrice: 9.90,
    coffeeId: 8,
    coffeeImg: Macchiato
},
{
    coffeeType: ["TRADITIONAL", "COM LEITE"],
    coffeeName: "Mocaccino",
    coffeeDescription: "Café expresso com calda de chocolate, pouco leite e espuma",
    coffeePrice: 9.90,
    coffeeId: 9,
    coffeeImg: Mocaccino
},
{
    coffeeType: ["ESPECIAL", "COM LEITE"],
    coffeeName: "Chocolate Quente",
    coffeeDescription: "Bebida feita com chocolate dissolvido no leite quente e café",
    coffeePrice: 9.90,
    coffeeId: 10,
    coffeeImg: HotChocolate
},
{
    coffeeType: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    coffeeName: "Cubano",
    coffeeDescription: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    coffeePrice: 9.90,
    coffeeId: 11,
    coffeeImg: Cuban
},
{
    coffeeType: ["ESPECIAL"],
    coffeeName: "Havaiano",
    coffeeDescription: "Bebida adocicada preparada com café e leite de coco",
    coffeePrice: 9.90,
    coffeeId: 12,
    coffeeImg: Havaian
},
{
    coffeeType: ["ESPECIAL"],
    coffeeName: "Árabe",
    coffeeDescription: "Bebida preparada com grãos de café árabe e especiarias",
    coffeePrice: 9.90,
    coffeeId: 13,
    coffeeImg: Arabic
},
{
    coffeeType: ["ESPECIAL", "ALCOÓLICO"],
    coffeeName: "Irlandês",
    coffeeDescription: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    coffeePrice: 9.90,
    coffeeId: 14,
    coffeeImg: Irish
}

]

interface CoffeeCartProps{
    coffeePrice: number
    coffeeName: string
    quantity: number
    coffeeId: number
}


export function Home(){ 
    //const [cart, setCart] = useState<CoffeeCartProps[]>([])
    
    return(
        <>
        <Header produtosNoCarrinho={0}/>
        <HomeContainer>
            <IntroContainer>
                <Content>
                    <Title>Encontre o café perfeito<br /> para qualquer hora do dia</Title>
                    <Description>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Description>
                    <List>
                        <ListItem>
                            <img src={CartPng} alt="" /> 
                            Compra simples e segura
                        </ListItem>
                        <ListItem>
                            <img src={CoffeePng} alt="" /> 
                            Embalagem mantém o café intacto
                        </ListItem>
                        <ListItem>
                            <img src={CronometroPng} alt="" /> 
                            Entrega rápida e rastreada
                        </ListItem>
                        <ListItem>
                            <img src={BoxPng} alt="" /> 
                            O café chega fresquinho até você
                        </ListItem>
                    </List>
                </Content>
                
                <ImageContainer>
                    <img src={CafeDeliveryImgPng} alt="" />
                </ImageContainer>
            </IntroContainer>
            <CoffeeList>
                <Subtitle>Nossos Cafés</Subtitle>
                <CoffeeWrapper>
                    {coffeeMenu.map(item => 
                        <CoffeeCard 
                            quantitySelected={0}
                            coffeeType={item.coffeeType}
                            coffeeName={item.coffeeName}
                            coffeePrice={
                                new Intl.NumberFormat("pt-Br",{style: "currency", currency: "BRL"}).format(item.coffeePrice)
                            }
                            coffeeDescription={item.coffeeDescription}
                            key={item.coffeeId}
                            coffeeImg={item.coffeeImg}
                            coffeeId={item.coffeeId}
                        />
                    )
                    }
                    
                </CoffeeWrapper>
            </CoffeeList>
        </HomeContainer>
        </>
    )
}