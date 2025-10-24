import Hero from '../components/Hero/Hero';
import Offers from '../components/Offers/Offers';
import Popular from '../components/popular/Popular';
import Collections from '../components/collections/collections';
import NewsLetter from '../components/newsletter/newsletter';


const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Collections />
            <NewsLetter />
        </div>
    )
}

export default Shop;