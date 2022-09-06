import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Cart(props) {
    const { quantity = 0, handleShowBasket = Function.prototype } = props;
    return (
        <div className="cart white-text blue" onClick={handleShowBasket}>
            < i class="material-icons"><AiOutlineShoppingCart /></i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div >
    );
}

export default Cart;