import React from 'react';
import PriceList from "../priceList/priceList";

let face_price_items_1 = [
    {name: "Комбинированная чистка лица (120 мин.)", price: "2500"},
    {name: "Ультразвуковая чистка лица (90 мин.)", price: "1500"},
    {name: "Мануальная чистка с применением очищающего ухода «АКТИЛИЯ» (120 мин.)", price: "2200"},
    {name: "Атравматичная чистка лица «АКТИЛИЯ» для любого типа кожи", price: "3200"}
]
let face_price_items_2 = [
    {name: "Классический массаж лица (40 мин.)", price: "1500"},
    {name: "Миофасциальный массаж лица (90 мин.)", price: "2500"},
    {name: "Лимфодренажный массаж лица (40 мин.)", price: "1300"}
]
let face_price_items_3 = [
    {name: "Окрашивание бровей", price: "350"},
    {name: "Окрашивание ресниц", price: "350"},
    {name: "Коррекция бровей", price: "350"}
]
let face_price_items_4 = [
    {name: "Уход с применением комбинированного пилинга УЛЬТРА-ПИЛ", price: "2000"},
    {name: "Корректирующий уход для проблемной кожи «АКТИЛИЯ»", price: "2200"},
    {name: "Лифтинг уход", price: "2000"},
    {name: "Интенсивный увлажняющий уход", price: "2000"},
    {name: "Антикуперозная программа", price: "2000"},
    {name: "Экспресс-уход", price: "2000"},
    {name: "Альгинатная маска", price: "550"}
]
let face_price_items_5 = [
    {name: "Микролифтинг на аппарате ALVI-PRAGYE (Чехия)", price: "1800"},
    {name: "Элос омоложение лица", price: "2500"},
    {name: "Фракционная мезотерпаия", price: "от 3000"},
]


const FaceSection = () => {



    return (
        <div className="wrapper">
            <h1 className="title" id="first_title"> Услуги по уходу за лицом </h1>
            <PriceList
                title="Чистка лица"
                down_title=""
                items={face_price_items_1}
            />
            <PriceList
                title="Массаж лица"
                down_title=""
                items={face_price_items_2}
            />
            <PriceList
                title="Коррекция бровей"
                down_title=""
                items={face_price_items_3}
            />
            <PriceList
                title="Профессиональный уход EGIA"
                down_title=""
                items={face_price_items_4}
            />
            <PriceList
                title="Аппаратная косметология"
                down_title="Ко всем услугам"
                items={face_price_items_5}
            />
        </div>
    );
};

export const Face = [...face_price_items_1, ...face_price_items_2, ...face_price_items_3, ...face_price_items_4, ...face_price_items_5]
export default FaceSection;
