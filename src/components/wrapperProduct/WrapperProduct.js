import React, { useRef } from "react";
import "./WrapperProduct.css";
import { BsCheckLg } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
    addToCart,
    decFromCart,
    removeFromCart,
    deleteAllCart,
} from "../../context/action/action";

const TOKEN = "5924983870:AAFzzs-7WiTkRgAmT0ZM8rhA3rj7KfT_b58";
const CHAT_ID = "5712097988";

//! https://api.telegram.org/bot5924983870:AAFzzs-7WiTkRgAmT0ZM8rhA3rj7KfT_b58/sendMessage?chat_id=5712097988&text=salom

function WrapperProduct({ cart }) {
    const dispatch = useDispatch();

    const name = useRef();
    const tel = useRef();
    const address = useRef();

    const handleSend = (e) => {
        e.preventDefault();
        let text = "<i>Buyutma</i> %0A%0A";
        text += `Ism: <b>${name.current.value}</b> %0A`;
        text += `Telefon: +998${tel.current.value} %0A`;
        text += `Manzil: ${address.current.value} %0A%0A`;

        cart.forEach((i) => {
            text += `Nomi: ${i.title} %0A`;
            text += `Soni: <b>${i.qty}ta</b> %0A`;
            text += `Narxi: ${i.price}so'm %0A%0A`;
        });
        text += `Jami: <b>${cart?.reduce(
            (a, b) => a + b.qty * b.price,
            0
        )}so'm</b> %0A`;

        const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
        const api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setTimeout(() => {
            name.current.value = "";
            tel.current.value = "";
            address.current.value = "";
            dispatch(deleteAllCart());
        }, 2000);
    };

    return (
        <div className="wrapper-product container">
            <h2 className="wrapper-product-title">
                Savatingiz, <span>{cart.length} ta mahsulot</span>
            </h2>
            <div className="wrapper-product-cargo">
                {cart?.map((item) => (
                    <div className="wrapper-product-card" key={item.id}>
                        <div className="wrapper-product-card-date">
                            <p>Hammasini yechish</p>
                            <div>
                                <p>Yetkazib berishning eng yaqin sanasi:</p>
                                <button>M04 17 (Erta)</button>
                            </div>
                        </div>
                        <div className="wrapper-product-card-product">
                            <div className="wrapper-product-card-product-image">
                                <div>
                                    <img width={100} src={item.url} alt="" />
                                </div>
                                <div>
                                    <p>{item.title}</p>
                                    <p>
                                        Sotuvchi: <span>Mukhammedjohn</span>
                                    </p>
                                </div>
                                <div className="wrapper-product-card-qty">
                                    <button
                                        disabled={item.qty === 1}
                                        onClick={() =>
                                            dispatch(decFromCart(item))
                                        }
                                    >
                                        <FiMinus />
                                    </button>
                                    <p>{item.qty}</p>
                                    <button
                                        onClick={() =>
                                            dispatch(addToCart(item))
                                        }
                                        disabled={item.qty === 9}
                                    >
                                        <FiPlus />
                                    </button>
                                </div>
                            </div>
                            <div className="wrapper-product-card-product-delete">
                                <HiOutlineTrash
                                    onClick={() =>
                                        dispatch(removeFromCart(item))
                                    }
                                />
                                <p>{item.price * item.qty}</p>
                                <h3>{item.price}</h3>
                                <p>
                                    <del>{item.price * 1.2} so'm</del>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="wrapper-product-order">
                <div className="wrapper-product-order-check">
                    <div>
                        <BsCheckLg />
                    </div>
                    <h3>
                        Buyurtmangizni rasmiy topshirish
                        <span>punktiga bepul yetkazib beramiz</span>
                    </h3>
                    <p>Eshikkacha yetkazib berishgacha yana </p>
                </div>
                <form
                    onSubmit={handleSend}
                    className="wrapper-product-order-execute"
                >
                    <h4>Buyurtmangiz</h4>
                    <div>
                        <p>Mahsulotlar ({cart.length}) ta:</p>
                        <p>{cart.reduce((a, b) => a + b.qty, 0)}</p>
                    </div>
                    <div>
                        <p>Jami:</p>
                        <h3>
                            {cart.reduce((a, b) => a + b.qty * b.price, 0)} so'm
                        </h3>
                    </div>
                    <div>
                        <input
                            ref={name}
                            required
                            type="text"
                            placeholder="Ismingiz..."
                        />
                        <input
                            ref={tel}
                            required
                            type="text"
                            placeholder="Telefon raqamingiz"
                            maxLength={9}
                        />
                        <input
                            ref={address}
                            required
                            type="text"
                            placeholder="Manzilingiz"
                        />
                        <button>Rasmiylashtirish</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WrapperProduct;
