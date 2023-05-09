import React from 'react';
import PriceList from "../priceList/priceList";

const MassageSection = () => {

    const massage_price_items = [
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
        {name: "Какой-то там массажик", price: "Пока думаем"},
    ]


    return (
        <div className="wrapper">
            <PriceList
                title="Услуги по массажу"
                down_title="Ко всем услугам"
                items={massage_price_items}
            />
        </div>
    );
};

export default MassageSection;