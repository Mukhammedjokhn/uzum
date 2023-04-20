import React from "react";
import Empty from "../../components/empty/Empty";
import WrapperProduct from "../../components/wrapperProduct/WrapperProduct";

function Cart() {
    return (
        <div>
            {/* <Empty
            title="Savatda hozircha mahsulot yoʻq"
            url="https://uzum.uz/static/img/shopocat.8cee444.png"
            desc="Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
         /> */}
            <WrapperProduct />
        </div>
    );
}

export default Cart;
