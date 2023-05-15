import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Face} from '../faceSection/faceSection'
import {Massage} from "../massageSection/massageSection";
import {Device} from "../deviceSection/deviceSection";

const OrderSection = () => {

    const [orders, setOrders] = useState([]);
    const [localDate, setLocalDate] = useState(new Date());
    const [localService, setLocalService] = useState("");
    const [selectSwitcher, setSelectSwitcher] = useState("");
    const [time, setTime] = useState("");
    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    const handleSwitchServices = (e) => {
        setSelectSwitcher(e);
        setLocalService("");
        setOrders([])
        setTime("")
    }

    const handleSwitchDate = (localDate) => {
        setLocalDate(localDate)
        setSelectSwitcher("");
        setLocalService("");
        setOrders([])
        setTime("")
    }

    const handleApi = async () => {
        await fetch('http://localhost:2023/api/orders/' + localDate.toLocaleDateString("ru", dateOptions), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => setOrders(result.data));
    };

    const handleApiPost = async () => {
        await fetch('http://localhost:2023/api/orders/save', {
            method: 'POST',
            body: JSON.stringify({
                "date": localDate.toLocaleDateString("ru", dateOptions),
                "service": localService,
                "time": time
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((orders) => {
                setSelectSwitcher("");
                setLocalService("");
                setOrders([])
                setTime("")
            })
    };

    return (
        <div className='order_section_wrapper' >
            <h1 className='title_calendar'>Выберете желаемую дату</h1>
            <div className='calendar-container'>
                <Calendar onChange={handleSwitchDate} value={localDate} />
            </div>
            <select name="switcher" id="fir_sel" value={selectSwitcher} onChange={e => handleSwitchServices(e.target.value)}>
                <option value=""> Выберете желаемую категорию </option>
                <option value="0">Услуги косметологии</option>
                <option value="1">Услуги массажа</option>
                <option value="2">Услуги эпиляции</option>
            </select>
            {selectSwitcher === "0" ?
                <select name="switcher" id="sec_sel" onChange={e => setLocalService(e.target.value)}>
                    <option value=""> Выберете желаемую услугу </option>
                    {Face.map((item) => <option value={item.name}>{item.name}</option>)}
                </select> : ''
            }
            {selectSwitcher === "1" ?
                <select name="switcher" id="sec_sel" onChange={e => setLocalService(e.target.value)}>
                    <option value=""> Выберете желаемую услугу </option>
                    {Massage.map((item) => <option value={item.name}>{item.name}</option>)}
                </select> : ''
            }
            {selectSwitcher === "2" ?
                <select name="switcher" id="sec_sel" onChange={e => setLocalService(e.target.value)}>
                    <option value=""> Выберете желаемую услугу </option>
                    {Device.map((item) => <option value={item.name}>{item.name}</option>)}
                </select> : ''
            }
            <button onClick={() => handleApi()} disabled={!!!localService}> Найти время </button>
            {!!!orders.length ? <div hidden={!!!orders.length}>На этот день нет записи</div> : ""}
            <select name="time" id="thi_sel" hidden={!!!orders.length} onChange={e => setTime(e.target.value)}>
                <option value=""> Выберете нужное время: </option>
                {orders.map((item) => <option> {item} </option>)}
            </select>
            <button onClick={() => handleApiPost()} disabled={!!!time} > Записаться </button>
        </div>
    );
};

export default OrderSection;