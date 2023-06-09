import React from 'react';
import egia from "./egia.jpg"
import laser from "./laser_res.jpg"


const StockSection = () => {
    return (
        <div className="wrapper">
            <h2 className="stockes__title">Акции</h2>
            <div className="stockes__container">
                <div className="stock" id="first__stock">
                    <img src={egia} alt="egia"/>
                    <div className="stock__text__content">
                        <h3>Курс EGIA ухода</h3>
                        <p className="stock__desciption">
                            Легендарная марка из Италии EGIA была основана в 1989 году.
                            При создании средств EGIA используются современные научные разработки
                            и открытия в области косметологии и дерматологии.
                        </p>
                        <p className="stock__desciption">
                            -30% при покупке курса из 10 сеансов
                        </p>
                        <a href="https://t.me/paris_sunset"><button className="to__book">Записаться</button></a>
                    </div>
                </div>
                <div className="stock">
                    <img src={laser} alt="laser"/>
                    <div className="stock__text__content">
                        <h3>Elos-эпиляция</h3>
                        <p className="stock__desciption">
                            Elos технология – это сочетание импульсов высокоинтенсивного света и радиочастоты.
                            Двойная энергия обеспечивает уникальную терапию удаления волос.
                        </p>
                        <p className="stock__desciption">
                            Первый и пятый сеанс -50%
                        </p>
                        <a href="https://t.me/paris_sunset"><button className="to__book">Записаться</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockSection;