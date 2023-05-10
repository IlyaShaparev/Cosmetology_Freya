import './../../scss/footer.scss';
import map from './map.png'
import phone from './phone.png'

function Footer () {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div id="first_block">
                    <h2 className="footer_title">Наш адрес</h2>
                    <hr />
                    <div className="wrapper_address">
                        <img className="footer_img" src={map} alt="Рисуночек не прогрузился :(" />
                        <p className="address">г. Балашиха, ул. Солнечная, д.22</p>
                    </div>
                    <h2 className="footer_title">Контакты</h2>
                    <hr />
                    <div className="wrapper_contacts">
                        <img className="footer_img" src={phone} alt="Рисуночек не прогрузился :(" />
                        <p className="phone">+7(999)-912-06-21</p>
                        <p className="email">example.mail@domain.ru</p>
                    </div>
                </div>
                <div id="second_block">
                    <h2 className="map_title">Мы на карте</h2>
                    <hr />
                    <div className="wrapper_map">
                        <iframe
                            className="map"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa442c4050e7ab35e2a90650a6236797346f898116bfcdc3ea2d6479ab5c399ea&amp;source=constructor"
                            frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;