import React from 'react';
import PriceList from "../priceList/priceList";

let massage_price_items = [
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
    {name: "Какой-то там массажик", price: "Пока думаем"},
];

const MassageSection = () => {

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

export const Massage = massage_price_items;
export default MassageSection;