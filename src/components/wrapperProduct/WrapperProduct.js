import React from "react";
import "./WrapperProduct.css";
import { BsCheckLg } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
    addToCart,
    decFromCart,
    removeFromCart,
} from "../../context/action/action";

function WrapperProduct({ cart }) {
    const dispatch = useDispatch();
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
                <div className="wrapper-product-order-execute">
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
                        <input type="text" placeholder="Ismingiz..." />
                        <input type="text" placeholder="Telefon raqamingiz" />
                        <input type="text" placeholder="Manzilingiz" />
                        <button>Rasmiylashtirish</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WrapperProduct;
