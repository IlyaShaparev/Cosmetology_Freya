import './../../scss/header.scss';
import s_logo from './../../small_logo.png'
import vk from './vk.png'
import wts from './whatsapp.png'
import menu from './menu.png'
import HeaderSection from "../subComponents/headerSection/headerSection";
import {useSelector, useDispatch} from "react-redux";
import {switcher} from "../../redux/slices/menuSlice"

function Header ({location}) {

    const active = useSelector(state => state.menu.value)
    const dispatch = useDispatch()

    if (location !== "main") {
        return (
            <header>
                <nav>
                    <div className="wrapper_nav">
                        <div className='burger_button' onClick={() => dispatch(switcher(active))}>
                            <img src={menu} alt="menu" />
                        </div>
                        <div className='wrapper_content'>
                            <div className="wrapper_logo">
                                <img
                                    src={s_logo}
                                    alt="Фрея"
                                    // srcSet={`${s_logo} 320w, ${m_logo} 680w, ${l_logo} 960w, ${logo} 1980w`}
                                />
                            </div>
                            <h1 className="named" align='center'> ФРЕЙЯ </h1>
                            <h2 className="slogan" align='center'> У красоты есть имя... </h2>
                        </div>
                        <div className='wrapper_social'>
                            <a href="https://t.me/paris_sunset" className="social_media"><img src={vk} alt="ВК"/></a>
                            <a href="https://t.me/paris_sunset" className="social_media"><img src={wts} alt="What's up"/></a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    return (
        <header>
            <nav>
                <div className="wrapper_nav">
                    <div className='burger_button' onClick={() => dispatch(switcher())}>
                        <img src={menu} alt="menu" />
                    </div>
                    <div className='wrapper_content'>
                        <div className="wrapper_logo">
                            <img
                                src={s_logo}
                                alt="Фрея"
                                // srcSet={`${s_logo} 320w, ${m_logo} 680w, ${l_logo} 960w, ${logo} 1980w`}
                            />
                        </div>
                        <h1 className="named" align='center'> ФРЕЙЯ </h1>
                        <h2 className="slogan" align='center'> У красоты есть имя... </h2>
                    </div>
                    <div className='wrapper_social'>
                        <a href="https://t.me/paris_sunset" className="social_media"><img src={vk} alt="ВК"/></a>
                        <a href="https://t.me/paris_sunset" className="social_media"><img src={wts} alt="What's up"/></a>
                    </div>
                </div>
            </nav>
            <HeaderSection/>
        </header>
    );
}

export default Header;