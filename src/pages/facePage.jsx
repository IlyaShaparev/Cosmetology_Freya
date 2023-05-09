import React from 'react';
import Header from "../components/header/header";
import Section from "../components/section/section";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/menu";

function FacePage(props) {
    return (
        <div className="face">
            <Header/>
            <Section title="face__section"/>
            <Footer/>
            <Menu/>
        </div>
    );
}

export default FacePage;