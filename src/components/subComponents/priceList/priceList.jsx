import "./../../../scss/section.scss"
import {Link} from "react-router-dom";



function PriceList(props) {

    return (
            <div className="section__content__wrapper">
                <h2 className='title'>{props.title}</h2>
                <ul className="price_list">
                    {props.items.map(item =>
                        <li className="price_box">
                            <h3 className="price_title">{item.name}</h3>
                            <span className="price">{item.price}</span>
                        </li>
                    )}
                </ul>
                {(window.location.pathname === "/Cosmetology_Freya/") ?
                    <p className="title" id='down' onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }
                    }>{props.down_title}</p> : <Link to="/Cosmetology_Freya/" className="title" id='down'>{props.down_title}</Link>
                }
            </div>
    )
}

export default PriceList