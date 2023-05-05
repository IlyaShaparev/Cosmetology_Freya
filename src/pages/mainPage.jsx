import React from 'react';
import Header from './../components/header/header';
import Section from './../components/section/section';
import Footer from './../components/footer/footer';
import Menu from './../components/menu/menu';

function MainPage(props) {
    return (
        <div className="main">
            <Header location="main"/>
            <Section title="short_price"/>
            {/*<hr className="section_separator"/>*/}
            <Section title="stockes"/>
            <Section title="swiper"/>
            <Footer />
            <Menu />
        </div>
    );
}

export default MainPage;