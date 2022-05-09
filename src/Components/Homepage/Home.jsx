import { NavBar } from "./NavBar"
import { NavBarmid } from "./NavBarmid"
import { Shopping } from "./Shopping"
import { Footer } from "./Footer"
import { Slider } from "./Slider"
import { Heart } from "./Heart"
import { More } from "./More"
import { Summer } from "./Summer"
import { Adidas } from "./Adidas"

export const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Slider></Slider>
            <NavBarmid />
            <More></More>
            <Heart></Heart>
            <Summer></Summer>
            <Adidas></Adidas>
            <Shopping></Shopping>
            <Footer></Footer>
        </>
    )
}