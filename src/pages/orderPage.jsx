import React from 'react';
import Header from './../components/header/header';
import Section from './../components/section/section';
import Footer from './../components/footer/footer';
import Menu from './../components/menu/menu';
import './../scss/order.scss'

function OrderPage(props) {
    return (
        <div className="order">
            <Header location="order"/>
            <Section title="order__section"/>
            <Footer />
            <Menu />
        </div>
    );
}

export default OrderPage;