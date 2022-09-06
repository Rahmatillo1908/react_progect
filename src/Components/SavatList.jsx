import React from "react";
import SavatTitle from "./SavatTitle";

function SavatList(props) {
    const { order } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    return (
        <div className="bsk">
            <ul className="collection basket-list">
                <li className="collection-item active">Korzinka</li>
                {order.length ? (
                    order.map((item) => {
                        return (
                            <SavatTitle key={item.id} {...item}
                                removeShowBasket={props.removeShowBasket}
                                incrementQuantity={props.incrementQuantity}
                                decrementQuantity={props.decrementQuantity}
                            />
                        )
                    })
                ) : (
                    <li className="collection-item">Korzinka bo`sh</li>
                )}
                <li className="collection-item active">
                    Total Price: {totalPrice} <b>$</b>
                </li>
                <i
                    className="material-icons basket-close"
                    onClick={props.handleShowBasket}
                >
                    close
                </i>
            </ul>
        </div>
    );
}

export default SavatList;