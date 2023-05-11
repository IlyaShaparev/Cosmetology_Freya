import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import first_ph from "./photoes/table_first.jpg"
import second_ph from "./photoes/device_elos_first.jpg"
import third_ph from "./photoes/general_first.jpg"
import fourth_ph from "./photoes/general_second.jpg"
import fifth_ph from "./photoes/4.jpg"
import sixth_ph from "./photoes/IMG_0431.jpg"
import seventh_ph from "./photoes/IMG_0451.jpg"
import eighth_ph from "./photoes/IMG_20221112_150052.jpg"
import ninth_ph from "./photoes/device_first.jpg"
import "./../../../scss/carousel.scss"

function SwiperSection() {
    return (
        <div className="wrapper">
            <h2 className="title__section__swiper"> Галерея </h2>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 569,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            showSides: false,
                            sidesOpacity: 0,
                            sideSize: 0,
                            scrollOnDevice: true,
                        },
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                            showSides: false,
                            sidesOpacity: 0,
                            sideSize: 0,
                            scrollOnDevice: true,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false,
                            showSides: false,
                            sidesOpacity: 0,
                            sideSize: 0,
                            scrollOnDevice: true,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false,
                            showSides: false,
                            sidesOpacity: 0,
                            sideSize: 0,
                            scrollOnDevice: true,
                        },
                    },
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: false,
                            showSides: true,
                            sidesOpacity: 0,
                            sideSize: 0,
                            scrollOnDevice: true,
                        },
                    },
                    {
                        breakpoint: 3300,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 2,
                            dots: false,
                            showSides: true,
                            sidesOpacity: 0.2,
                            sideSize: 0.2,
                            scrollOnDevice: true,
                        },
                    },
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={0.2}
                sideSize={0.2}
                slidesToScroll={3}
                slidesToShow={3}
                scrollOnDevice={true}
            >
                <div className="photo_box">
                    <img
                        alt=""
                        src={first_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={second_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={third_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={fourth_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={fifth_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={sixth_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={seventh_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={eighth_ph}
                    />
                </div>
                <div className="photo_box">
                    <img
                        alt=""
                        src={ninth_ph}
                    />
                </div>
            </InfiniteCarousel>
        </div>
    );
}

export default SwiperSection;