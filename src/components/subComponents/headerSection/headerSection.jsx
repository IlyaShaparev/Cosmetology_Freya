import React from 'react';
import './../../../scss/headerSection.scss'
import {Link} from "react-router-dom";


function HeaderSection(props) {
    return (
        <div className="headerSection">
            <div className="headerSection__wrapper">
                <div className="headerSection__box">
                    <h2 className="title__face">Лицо</h2>
                    <Link to="/Cosmetology_Freya/face" >
                        <button className="to__pricelist">Услуги</button>
                    </Link>
                </div>

                <div className="headerSection__box">
                    <h2 className="title__massage">Тело</h2>
                    <Link to="/Cosmetology_Freya/massage" className="headerSection__box__href">
                        <button className="to__pricelist">Услуги</button>
                    </Link>
                </div>

                <div className="headerSection__box">
                    <h2 className="title__cream">Эпиляция</h2>
                    <Link to="/Cosmetology_Freya/device-cosmetology" className="headerSection__box__href">
                        <button className="to__pricelist">Услуги</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;