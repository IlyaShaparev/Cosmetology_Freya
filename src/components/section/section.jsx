import './../../scss/section.scss';
import ShortPrice from "./../subComponents/shortPrice/shortPrice";
import StockSection from "../subComponents/stockSection/stockSection";
import SwiperSection from "../subComponents/swiperSection/swiperSection";


function Section (props) {
    if (props.title === "short_price") {
        return (
            <section className="short_price">
                <ShortPrice/>
            </section>
        )
    }
    else if (props.title === "swiper") {
        return (
            <section className="swiper">
                <SwiperSection/>
            </section>
        );
    }
    else {
        return (
            <section className="stockes__section">
                <StockSection/>
            </section>
        )
    }
}

export default Section;