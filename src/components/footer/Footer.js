import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { BsGooglePlay, BsApple } from "react-icons/bs";

function Footer() {
   const { pathname } = useLocation();
   if (pathname === "/login") {
      return <></>;
   }
   return (
      <div className="footer container">
         <div className="footer-links">
            <ul>
               Biz haqimizda
               <li>Topshirish punktlari</li>
               <li>Vakansiyalar</li>
            </ul>
            <ul>
               Foydalanuvchilarga
               <li>Biz bilan bogʻlanish</li>
               <li>Savol-Javob</li>
            </ul>
            <ul>
               Tadbirkorlarga
               <li>Uzumda soting</li>
               <li>Sotuvchi kabinetiga kirish</li>
            </ul>
            <ul>
               Ilovani yuklab olish
               <li>
                  <BsApple /> App Store
               </li>
               <li>
                  <BsGooglePlay />
                  Google Play
               </li>
            </ul>
         </div>
         <div className="footer-bottom">
            <div>
               <p>Maxfiylik kelishuvi</p>
               <p>Foydalanuvchi kelishuvi</p>
            </div>
            <div>
               «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
               himoyalangan»
            </div>
         </div>
      </div>
   );
}

export default Footer;

/**




 */
