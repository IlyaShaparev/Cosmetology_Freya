import React from 'react';
import Header from './../components/header/header';
import Section from './../components/section/section';
import Footer from './../components/footer/footer';
import Menu from './../components/menu/menu';

function AboutPage(props) {
    return(
        <div>
            <Header location="about"/>
            <Section/>
            <Footer/>
            <Menu/>
        </div>
    );
}

export default AboutPage;