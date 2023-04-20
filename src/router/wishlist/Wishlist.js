import React from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Product from "../../components/products/Products";

function Wishlist() {
   const data = useSelector((s) => s.heart);
   return (
      <div className="container">
         {data.length ? (
            <Product data={data} />
         ) : (
            <Empty
               title="Sizga yoqqanini qoʻshing"
               url="https://uzum.uz/static/img/hearts.cf414be.png"
               desc="Bosh sahifaga o'ting va mahsulotdagi ♡ belgisini bosing"
            />
         )}
      </div>
   );
}

export default Wishlist;
