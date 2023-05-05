import './../../scss/menu.scss'
import home from './home.png'
import cream from './cream.png'
import cancel from './cancel.png'
import body from './body.png'
import face from './face.png'
import phone from './phone.png'
import {useSelector, useDispatch} from "react-redux";
import {switcher} from "../../redux/slices/menuSlice"


function Menu() {

    const active = useSelector(state => state.menu.value)
    const dispatch = useDispatch()

    return (
        <div className={active ? "menu__wrapper active" : "menu__wrapper"} onClick={() => dispatch(switcher(active))}>
            <div className="menu__content">
                <div className="menu__wrapper__cancel" ><img src={cancel} alt="Закрыть" className='menu__img__cancel' /></div>
                <ul>
                    <a href="/"><li> <img src={home} alt="img" /> Главная</li></a>
                    <a href="/face"><li> <img src={face} alt="img" /> Лицо</li></a>
                    <a href="/cosmetology"><li> <img src={cream} alt="img" /> Косметология</li></a>
                    <a href="/body"><li> <img src={body} alt="img" /> Массаж</li></a>
                    <a href="/contacts"><li> <img src={phone} alt="img" /> Контакты</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Menu