import React from "react";
import Empty from "../../components/empty/Empty";
import WrapperProduct from "../../components/wrapperProduct/WrapperProduct";
import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector((s) => s.cart);
    return (
        <div>
            {cart.length ? (
                <WrapperProduct cart={cart} />
            ) : (
                <Empty
                    title="Savatda hozircha mahsulot yoʻq"
                    url="https://uzum.uz/static/img/shopocat.8cee444.png"
                    desc="Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
                />
            )}
        </div>
    );
}

export default Cart;
