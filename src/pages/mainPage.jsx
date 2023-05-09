import React from 'react';
import Header from './../components/header/header';
import Section from './../components/section/section';
import Footer from './../components/footer/footer';
import Menu from './../components/menu/menu';

function MainPage(props) {
    return (
        <div className="main">
            <Header location="main"/>
            <Section title="short__price"/>
            <Section title="stockes__section"/>
            <Section title="swiper__section"/>
            <Footer />
            <Menu />
        </div>
    );
}

export default MainPage;