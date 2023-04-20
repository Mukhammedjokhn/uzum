import React from "react";
import "./Products.css";
import {
   AiOutlineHeart,
   AiOutlineShoppingCart,
   AiFillHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/action/action";

function Products({ data }) {
   const dispatch = useDispatch();
   const heart = useSelector((s) => s.heart);
   return (
      <div className="products container">
         {data?.map((item) => (
            <div key={item.id} className="pro__card">
               <div className="pro__image">
                  <Link to={`/product/${item.id}`} state={item}>
                     <img src={item.url} alt="" />
                  </Link>
                  {heart?.some((i) => i.id === item.id) ? (
                     <AiFillHeart
                        style={{ color: "#7000ff" }}
                        onClick={() => dispatch(removeFromHeart(item))}
                     />
                  ) : (
                     <AiOutlineHeart
                        onClick={() => dispatch(addToHeart(item))}
                     />
                  )}
               </div>
               <div className="pro__body">
                  <p className="pro__card-title">
                     {item.title.length > 55
                        ? `${item.title.slice(0, 55)}...`
                        : item.title}
                  </p>
                  <span className="pro__card-monthly">
                     {Math.round((item.price * 1.5) / 12)} s'om/oyiga
                  </span>
                  <div className="pro__card-price">
                     <div>
                        <del>{item.price * 1.2} s'om</del>
                        <p>{item.price} s'om</p>
                     </div>
                     <button className="pro__card-shopping">
                        <AiOutlineShoppingCart />
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}

export default Products;
