import React from 'react';
import Header from "../components/header/header";
import Section from "../components/section/section";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/menu";

function MassagePage(props) {
    return (
        <div className="massage">
            <Header/>
            <Section title="massage__section"/>
            <Footer/>
            <Menu/>
        </div>
    );
}

export default MassagePage;