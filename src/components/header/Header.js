import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

function Header() {
   const { pathname } = useLocation();
   if (pathname === "/login") {
      return <></>;
   }
   return (
      <div className="header">
         <div className="header-container container">
            <ul>
               <li className="header-locate">
                  <CiLocationOn />
               </li>
               <li className="header-namangan">
                  Shahar: <span>Namangan</span>
               </li>
               <li>Topshirish punktlari</li>
            </ul>
            <p className="header-order">
               Buyurtmangizni 1 kunda bepul yetkazib beramiz!
            </p>
            <ul>
               <li>Uzumda soting</li>
               <li>Savol-javoblar</li>
               <li>Buyurtmalarim</li>
               <li className="header-language">
                  <GrLanguage />
                  O'zbekcha
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Header;
