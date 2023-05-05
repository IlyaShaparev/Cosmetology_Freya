import "./../../../scss/section.scss"

function ShortPrice() {
    return (
        <div className="wrapper">
            <div className="section__content__wrapper">
                <h2 className='title'>Приглашаем Вас на процедуры</h2>
                <div className="price_box">
                    <h3 className="price_title">Комбинированная чистка лица (120 мин.)</h3>
                    <span className="price">2500</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Ультразвуковая чистка лица (90 мин.)</h3>
                    <span className="price">1500</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Голень (обе)</h3>
                    <span className="price">1600</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Руки до локтя</h3>
                    <span className="price">900</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Классический массаж лица (40 мин.)</h3>
                    <span className="price">1500</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Миофасциальный массаж лица (90 мин.)</h3>
                    <span className="price">2500</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Коррекция бровей</h3>
                    <span className="price">350</span>
                </div>
                <div className="price_box">
                    <h3 className="price_title">Окрашивание бровей</h3>
                    <span className="price">350</span>
                </div>
                <p className="title" id='down'>Все услуги и цены</p>
            </div>
        </div>
    )
}

export default ShortPrice