import './../../scss/section.scss';
import PriceList from "../subComponents/priceList/priceList";
import StockSection from "../subComponents/stockSection/stockSection";
import SwiperSection from "../subComponents/swiperSection/swiperSection";
import DeviceSection from "../subComponents/deviceSection/deviceSection";
import FaceSection from "../subComponents/faceSection/faceSection";
import MassageSection from "../subComponents/massageSection/massageSection";
import OrderSection from "../subComponents/orderSection/orderSection";


function Section (props) {
    const price_items = [{
            name: "Комбинированная чистка лица (120 мин.)",
            price: "2500"
        },
        {
            name: "Ультразвуковая чистка лица (90 мин.)",
            price: "1500"
        },
        {
            name: "Голень (обе)",
            price: "1600"
        },
        {
            name: "Руки до локтя",
            price: "900"
        },
        {
            name: "Классический массаж лица (40 мин.)",
            price: "1500"
        },
        {
            name: "Коррекция бровей",
            price: "350"
        },
        {
            name: "Окрашивание бровей",
            price: "350"
        }
    ]

    switch (props.title) {
        case "short__price": {
            return (
                <section className="section__price__list">
                    <div className="wrapper">
                        <PriceList
                            title="Приглашаем вас на процедуры"
                            down_title="Все услуги и цены"
                            items={price_items}/>
                    </div>
                </section>
            )
        }

        case "stockes__section": {
            return (
                <section className="stockes__section">
                    <StockSection />
                </section>
            )
        }

        case "device__section": {
            return (
                <section className="section__price__list device__section">
                    <DeviceSection />
                </section>
            )
        }

        case "face__section": {
            return (
                <section className="section__price__list face__section">
                    <FaceSection />
                </section>
            )
        }

        case "massage__section": {
            return (
                <section className="section__price__list massage__section">
                    <MassageSection />
                </section>
            )
        }

        case "order__section": {
            return (
                <section className="section__price__list order__section">
                    <OrderSection />
                </section>
            )
        }

        default: {
            return (
                <section className="swiper">
                    <SwiperSection />
                </section>
            )
        }
    }
}

export default Section;