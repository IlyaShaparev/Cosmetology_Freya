import React from 'react';
import './../../../scss/headerSection.scss'
import {Link} from "react-router-dom";
import ph_first from "./Rockes-on-a-back.avif"
import ph_second from "./back_vertical.avif"
import ph_third from "./masked_face.avif"


function HeaderSection(props) {
    return (
        <div className="headerSection">
            <div className="headerSection__wrapper">

                <div className="headerSection__box">
                    <img src={ph_first} alt="Услуги косметологии"/>
                    <div className="headerSection__box__content">
                        <h2 className="title__face">Лицо</h2>
                        <Link to="/Cosmetology_Freya/face" >
                            <button className="to__pricelist">Услуги</button>
                        </Link>
                    </div>
                </div>

                <div className="headerSection__box">
                    <img src={ph_second} alt="Услуги массажа"/>
                    <div className="headerSection__box__content">
                        <h2 className="title__massage">Тело</h2>
                        <Link to="/Cosmetology_Freya/massage" className="headerSection__box__href">
                            <button className="to__pricelist">Услуги</button>
                        </Link>
                    </div>
                </div>

                <div className="headerSection__box">
                    <img src={ph_third} alt="Услуги эпиляции"/>
                    <div className="headerSection__box__content">
                        <h2 className="title__cream">Эпиляция</h2>
                        <Link to="/Cosmetology_Freya/device-cosmetology" className="headerSection__box__href">
                            <button className="to__pricelist">Услуги</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;