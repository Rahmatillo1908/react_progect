import React, { useEffect, useState } from "react";
import Cart from "./Cart.jsx";
import Loader from "./Loader";
import { APi_KEY, APi_URL } from "../Config.jsx";
import MaxsulotList from "./MaxsulotList";
import SavatList from "./SavatList";
import { toast } from "react-toastify";
function Magazin() {
    const [mahsulot, setMahsulot] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return item;
                }
            });
            setOrder(newOrder);
        }
        toast.success('Mahsulot qushildi')
    };

    const handleShowBasket = () => {
        setBasketShow(!isBasketShow);
    };
    const removeShowBasket = (itemID) => {
        const newOrder = order.filter(item => item.id !== itemID)
        setOrder(newOrder)
        toast.error('Mahsulot olib tashlandi ')

    }

    const incrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })

        setOrder(newOrder)
    }
    const decrementQuantity = (itemID) => {
        const newOrder = order.map(el => {
            if (el.id === itemID) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })

        setOrder(newOrder)
    }
    useEffect(() => {
        fetch(APi_URL, {
            headers: {
                Authorization: APi_KEY,
            },
        })
            .then((response) => response.json())
            .then((mahsulot) => {
                mahsulot.featured && setMahsulot(mahsulot.featured);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <Cart quantity={order.length} handleShowBasket={handleShowBasket} />
            {loading ? (
                <Loader />
            ) : (
                <MaxsulotList mahsulot={mahsulot} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <SavatList order={order}
                    handleShowBasket={handleShowBasket}
                    removeShowBasket={removeShowBasket}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity} />
            )}
        </div>
    );
}
export default Magazin;