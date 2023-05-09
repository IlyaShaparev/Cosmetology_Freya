import './../../scss/menu.scss'
import home from './home.png'
import laser from './laser.png'
import cancel from './cancel.png'
import body from './body.png'
import face from './face.png'
import phone from './phone.png'
import {useSelector, useDispatch} from "react-redux";
import {switcher} from "../../redux/slices/menuSlice"


function Menu() {

    const active = useSelector(state => state.menu.value);
    const dispatch = useDispatch();

    return (
        <div className={active ? "menu__wrapper active" : "menu__wrapper"} onClick={() => dispatch(switcher(active))}>
            <div className="menu__content">
                <div className="menu__wrapper__cancel" ><img src={cancel} alt="Закрыть" className='menu__img__cancel' /></div>
                <ul>
                    <li><a href="/"> <img src={home} alt="img" /> Главная </a></li>
                    <li><a href="/face"> <img src={face} alt="img" /> Косметология </a></li>
                    <li><a href="/device-cosmetology"> <img src={laser} alt="img" /> Эпиляция </a></li>
                    <li><a href="/massage"> <img src={body} alt="img" /> Массаж </a></li>
                    <li><a href="/contacts"> <img src={phone} alt="img" /> Контакты </a></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;