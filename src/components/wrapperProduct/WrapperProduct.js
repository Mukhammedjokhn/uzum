import React from "react";
import "./WrapperProduct.css";
import { DATA } from "../../static";
import { BsCheckLg } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";

function WrapperProduct() {
    const qty = DATA.map((item) => item.price);
    return (
        <div className="wrapper-product container">
            <h2 className="wrapper-product-title">
                Savatingiz, <span>{DATA.length} ta mahsulot</span>
            </h2>
            <div className="wrapper-product-cargo">
                {DATA?.map((item) => (
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
                            </div>
                            <div className="wrapper-product-card-product-delete">
                                <HiOutlineTrash />
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
                        Buyurtmangizni rasmiy topshirish{" "}
                        <span>punktiga bepul yetkazib beramiz</span>
                    </h3>
                    <p>
                        Eshikkacha yetkazib berishgacha yana{" "}
                        {qty.reduce((a, b) => a + b, 0)}
                    </p>
                </div>
                <div className="wrapper-product-order-execute">
                    <h4>Buyurtmangiz</h4>
                    <div>
                        <p>Mahsulotlar ({DATA.length}) ta:</p>
                        <p>{qty.reduce((a, b) => a + b, 0)} so'm</p>
                    </div>
                    <div>
                        <p>Jami:</p>
                        <h3>{qty.reduce((a, b) => a + b, 0)} so'm</h3>
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
