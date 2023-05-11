import './../../scss/menu.scss'
import home from './home.png'
import laser from './laser.png'
import cancel from './cancel.png'
import body from './body.png'
import face from './face.png'
import phone from '../footer/phone.png'
import {useSelector, useDispatch} from "react-redux";
import {switcher} from "../../redux/slices/menuSlice"
import {Link} from "react-router-dom";


function Menu() {

    const active = useSelector(state => state.menu.value);
    const dispatch = useDispatch();

    return (
        <div className={active ? "menu__wrapper active" : "menu__wrapper"} onClick={() => dispatch(switcher(active))}>
            <div className="menu__content">
                <div className="menu__wrapper__cancel" ><img src={cancel} alt="Закрыть" className='menu__img__cancel' /></div>
                <ul>
                    <li><Link to="/Cosmetology_Freya/"> <img src={home} alt="img" /> Главная </Link></li>
                    <li><Link to="/Cosmetology_Freya/face"> <img src={face} alt="img" /> Косметология </Link></li>
                    <li><Link to="/Cosmetology_Freya/device-cosmetology"> <img src={laser} alt="img" /> Эпиляция </Link></li>
                    <li><Link to="/Cosmetology_Freya/massage"> <img src={body} alt="img" /> Массаж </Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;