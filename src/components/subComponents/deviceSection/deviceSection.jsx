import React from 'react';
import PriceList from "../priceList/priceList";

let device_price_items = [
    {name: "Подмышечная область", price: "600"}, {name: "Бикини (по линии белья)", price: "1000"},
    {name: "Глубокое бикини", price: "1400"}, {name: "Голень (обе)", price: "1600"},
    {name: "Бедра полностью", price: "2000"}, {name: "Ноги полностью", price: "2700"},
    {name: "Руки полностью", price: "1500"}, {name: "Руки до локтя", price: "900"}
]

const DeviceSection = () => {



    return (
        <div className="wrapper">
            <PriceList
                title="Услуги по эпиляции"
                down_title="Ко всем услугам"
                items={device_price_items}/>
        </div>
    );
};


export const Device = device_price_items;
export default DeviceSection;