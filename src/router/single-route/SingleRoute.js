import React, { useState } from "react";
import "./SingleRoute.css";
import { useLocation } from "react-router-dom";
import SingleRouteSwiper from "./SingleRouteSwiper";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/action/action";

function SingleRoute() {
    const dispatch = useDispatch();
    const heart = useSelector((s) => s.heart);
    console.log(heart);
    const { state } = useLocation();
    const [count, setCount] = useState(1);
    return (
        <div className="single-route container">
            <div className="single-route-image">
                <SingleRouteSwiper image={state.url} />
            </div>
            <div className="single-route-body">
                <div className="single-route-wishlist-btn">
                    <p>
                        {heart?.some((i) => i.id === state.id) ? (
                            <AiFillHeart
                                style={{ color: "#7000ff" }}
                                onClick={() => dispatch(removeFromHeart(state))}
                            />
                        ) : (
                            <AiOutlineHeart
                                onClick={() => dispatch(addToHeart(state))}
                            />
                        )}
                        <p>Istaklarga</p>
                    </p>
                </div>
                <div className="single-route-pro-info">
                    <h2 className="single-route-title">{state?.title}</h2>
                    <p>
                        Sotuvchi: <span>Mukhammedjohn</span>
                    </p>
                </div>
                <div className="single-route-pro-count">
                    <p className="single-route-pro-count-title">Midqor:</p>
                    <div className="single-route-pro-counter">
                        <button
                            disabled={count === 1}
                            onClick={() => setCount(count - 1)}
                        >
                            <FiMinus />
                        </button>
                        <p>{count}</p>
                        <button
                            disabled={count === 10}
                            onClick={() => setCount(count + 1)}
                        >
                            <FiPlus />
                        </button>
                    </div>
                    <p className="single-route-pro-count-title">Narx:</p>
                    <div className="single-route-pro-count-price">
                        <h3>{state?.price} so'm</h3>
                        <p>
                            <del>{state?.price * 1.2} so'm</del>
                        </p>
                    </div>
                    <div className="single-route-pro-count-buy">
                        <button className="single-route-pro-count-buy-blue">
                            Savatga qo'shish
                        </button>
                        <button className="single-route-pro-count-buy-white">
                            Tugmani 1 bosishda xarid qilish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleRoute;
