import React from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/menu";
import Section from "../components/section/section";

function DevicePage(props) {
    return (
        <div className="device">
            <Header />
            <Section title="device__section" />
            <Footer />
            <Menu />
        </div>
    );
}

export default DevicePage;