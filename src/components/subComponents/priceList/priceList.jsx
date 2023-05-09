import "./../../../scss/section.scss"



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
                <p className="title" id='down' onClick={() => {
                    if (window.location.pathname === "/") {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }
                    else {
                        window.location.href = "/";
                    }
                }
                }
                >{props.down_title}</p>
            </div>
    )
}

export default PriceList