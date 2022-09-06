import React from "react";
import { SiIconify } from 'react-icons/si'

function SavatTitle(props) {
    const { id, name, price, quantity } = props;
    return (
        <li className="collection-item avatar">
            {/* <img src="images/yuna.jpg" alt="" className="circle" /> */}
            <span className="title">
                {name} x {quantity} = {price}$
            </span>
            <a href="#!" className="secondary-content">
                {/* <SiIconify size={30} />*/}
                <button className="material-icons left ml-5"
                    onClick={() => props.incrementQuantity(id)}>exposure_plus_1 </button>
                <i className="material-icons basket-delete ml-5"
                    onClick={() => props.removeShowBasket(id)} >delete_forever</i>
                <button className="material-icons left ml-5"
                    onClick={() => props.decrementQuantity(id)}>exposure_neg_1 </button>
            </a>
        </li>

    );
}

export default SavatTitle;