import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineHome,
} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { NAVBAR_BOTTOM_DATA } from "../../static";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../context/action/action";
function Navbar() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const cart = useSelector((s) => s.cart);
    const [side, setSide] = useState(false);
    const [pro, setPro] = useState(false);
    if (pathname === "/login") {
        return <></>;
    }
    return (
        <>
            <div className="navbar container">
                <NavLink to={"/"} className="nav__logo">
                    <img
                        src="data:image/svg+xml,%3csvg width='215' height='32' viewBox='0 0 215 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cg clip-path='url(%23clip0_264_8440)'%3e %3cpath d='M184.63 9.9482H189.047L183.466 16.2628L189.509 22.9514H185.081L179.25 16.5839V22.9514H175.5V5.92307H179.25V16.0406L184.63 9.9482Z' fill='%237000FF'/%3e %3cpath d='M167.097 12.7422V9.94467H163.347V22.9479H167.097V17.2047C167.097 14.9787 168.713 13.55 170.769 13.55H173.221V9.66951H171.38C169.101 9.68009 167.453 11.6133 167.097 12.7422Z' fill='%237000FF'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M158.496 9.94467V18.383C158.496 19.5189 158.817 19.7976 159.576 19.7941H160.169V22.9479H158.02C157.307 22.9842 156.603 22.7825 156.017 22.3744C155.431 21.9663 154.998 21.375 154.785 20.6937C153.872 22.3235 151.963 23.2513 149.882 23.2513C145.945 23.2513 143.426 19.847 143.507 16.4322C143.507 13.0561 145.733 9.69067 150.069 9.69067C152.587 9.69067 154.006 10.7913 154.813 11.9943L154.785 9.94467H158.496ZM147.127 16.471C147.127 18.5276 148.732 19.9987 150.848 19.9987C153.05 19.9987 154.641 18.51 154.641 16.471C154.641 14.4319 153.05 12.9891 150.848 12.9891C148.718 12.9891 147.127 14.4143 147.127 16.471Z' fill='%237000FF'/%3e %3cpath d='M130.328 12.1178C131.217 10.6608 133.005 9.6942 135.376 9.6942C139.408 9.6942 141.341 12.2377 141.341 15.388V22.9408H137.591V15.9065C137.591 14.4214 136.73 13.0843 134.928 13.0843C133.125 13.0843 132.236 14.3543 132.236 15.8642V22.962H128.472V15.8748C128.472 14.3649 127.527 13.0949 125.713 13.0949C123.9 13.0949 123.103 14.4214 123.103 15.9171V22.9514H119.353V15.388C119.353 12.2377 121.406 9.6942 125.424 9.6942C127.463 9.6942 129.424 10.6608 130.328 12.1178Z' fill='%237000FF'/%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M196.818 9.6942C192.497 9.6942 189.763 12.1036 189.763 16.4604C189.763 20.8171 192.493 23.2548 196.853 23.2548C203.112 23.2548 203.496 19.0215 203.496 19.0215H199.376C199.376 19.0215 199.058 20.3444 196.857 20.3444C194.458 20.3444 193.717 18.9016 193.717 17.4728H203.736C203.785 17.1386 203.812 16.8016 203.817 16.4639C203.817 12.1036 201.073 9.6942 196.818 9.6942ZM193.77 15.1763C193.77 14.118 194.476 12.6081 196.818 12.6081C199.161 12.6081 199.813 14.118 199.813 15.1763H193.77Z' fill='%237000FF'/%3e %3cpath d='M215 9.70126V12.721L210.915 12.7316V17.3176C210.915 19.1309 211.395 19.6988 212.679 19.6988H215V22.9831H212.679C208.943 22.9831 207.179 21.4486 207.179 17.808V12.7351H205.285V10.5761L208.904 7.12249H210.929V9.70126H215Z' fill='%237000FF'/%3e %3cpath d='M103.623 9.68008C101.249 9.68008 99.4607 10.6467 98.5717 12.1177C97.6721 10.6467 95.7107 9.68008 93.6682 9.68008C89.6642 9.68008 87.597 12.2377 87.597 15.3879V22.9514H91.3505V15.9171C91.3505 14.4072 92.1442 13.0949 93.961 13.0949C95.7778 13.0949 96.7302 14.3649 96.7302 15.8748V22.962H100.48V15.8642C100.48 14.3543 101.369 13.0843 103.172 13.0843C104.975 13.0843 105.835 14.4072 105.835 15.9065V22.9408H109.585V15.3879C109.585 12.2377 107.652 9.68008 103.623 9.68008Z' fill='%237000FF'/%3e %3cpath d='M68.3003 9.93408V13.0985L60.8109 19.787H68.7483V22.9514H55.8263V19.787L63.3297 13.0985H56.1191V9.93408H68.3003Z' fill='%237000FF'/%3e %3cpath d='M78.0827 19.7729C79.8183 19.7729 80.9825 18.8169 80.9825 16.7532V9.94467H84.736V16.8943C84.736 21.4345 80.9401 23.1983 78.0933 23.1983C75.2464 23.1983 71.4541 21.4239 71.4541 16.8943V9.94467H75.2182V16.7532C75.2182 18.8169 76.347 19.7729 78.0827 19.7729Z' fill='%237000FF'/%3e %3cpath d='M46.7212 19.7729C48.4427 19.7729 49.6104 18.8169 49.6104 16.7532V9.94467H53.3604V16.8943C53.3604 21.4345 49.5575 23.1983 46.7353 23.1983C43.8708 23.1983 40.0926 21.4239 40.0926 16.8943V9.94467H43.8461V16.7532C43.8461 18.8169 44.9997 19.7729 46.7212 19.7729Z' fill='%237000FF'/%3e %3cpath d='M31.9896 16.0053C31.9889 19.1704 31.0498 22.2643 29.2912 24.8955C27.5326 27.5268 25.0334 29.5772 22.1098 30.7875C19.1861 31.9978 15.9693 32.3135 12.8663 31.6949C9.76321 31.0762 6.91327 29.5508 4.6769 27.3117C2.44053 25.0726 0.918195 22.2204 0.302449 19.1158C-0.313297 16.0111 0.00520068 12.7936 1.21766 9.87001C2.43012 6.94646 4.48208 4.44826 7.114 2.6914C9.74592 0.934529 12.8396 -0.00208978 16.0037 3.50108e-06C18.1047 -0.000924639 20.1854 0.412484 22.1266 1.21658C24.0679 2.02068 25.8316 3.1997 27.317 4.68621C28.8023 6.17271 29.9802 7.93754 30.7831 9.87977C31.5861 11.822 31.9985 13.9035 31.9966 16.0053H31.9896ZM17.8304 5.5597C17.2309 5.50326 16.6173 5.47856 15.9966 5.47856C15.3759 5.47856 14.7658 5.50326 14.1663 5.5597V14.0933H17.8304V5.5597ZM26.2942 10.5338C24.9588 10.0949 23.5942 9.7507 22.2104 9.5037V16.672C22.2104 21.8296 20.0239 24.5424 15.9931 24.5424C11.9622 24.5424 9.78282 21.8296 9.78282 16.672V9.5037C8.39801 9.75113 7.03224 10.0953 5.69554 10.5338V16.7108C5.67022 18.0799 5.9179 19.4402 6.42412 20.7124C6.93033 21.9845 7.68493 23.143 8.64382 24.1201C9.60271 25.0973 10.7467 25.8734 12.0088 26.4033C13.271 26.9331 14.6261 27.206 15.9949 27.206C17.3637 27.206 18.7187 26.9331 19.9809 26.4033C21.2431 25.8734 22.387 25.0973 23.3459 24.1201C24.3048 23.143 25.0594 21.9845 25.5656 20.7124C26.0718 19.4402 26.3195 18.0799 26.2942 16.7108V10.5338Z' fill='%237000FF'/%3e %3c/g%3e %3cdefs%3e %3cclipPath id='clip0_264_8440'%3e %3crect width='215' height='32' fill='white'/%3e %3c/clipPath%3e %3c/defs%3e %3c/svg%3e"
                        alt=""
                    />
                </NavLink>

                <button
                    onClick={() => setSide(!side)}
                    className="nav__katalog-btn"
                >
                    {side ? <FiX style={{ fontSize: "18px" }} /> : <FiMenu />}
                    <span>Katalog</span>
                </button>
                <div className="nav__search">
                    <input type="text" placeholder="Qidirish..." />
                    <button>
                        <FiSearch />
                    </button>
                </div>
                <div
                    className={
                        side
                            ? "nav-dropdown-panel active"
                            : "nav-dropdown-panel"
                    }
                >
                    <div
                        style={side ? { opacity: "1" } : { opacity: "0" }}
                        className="nav-dropdown-panel-shadow"
                    ></div>
                </div>
                <div className="nav__links">
                    <NavLink to={"/"} className="nav__link">
                        <AiOutlineHome />
                        <span>Bosh sahifa</span>
                    </NavLink>
                    <NavLink to={"/login"} className="nav__link">
                        <FiUser />
                        <span>Kirish</span>
                    </NavLink>
                    <NavLink to={"/wishlist"} className="nav__link">
                        <AiOutlineHeart />
                        <span>Saralangan</span>
                    </NavLink>
                    <NavLink
                        to={"/cart"}
                        className="nav__link nav__cart"
                        onMouseEnter={
                            cart.length
                                ? () => setPro(true)
                                : () => setPro(false)
                        }
                        onMouseLeave={() => setPro(false)}
                    >
                        <AiOutlineShoppingCart />
                        <span>Savatcha</span>
                        {cart.length ? <div>{cart.length}</div> : <></>}
                    </NavLink>
                </div>
                {pro ? (
                    <div
                        className="nav__have__pro"
                        onMouseEnter={() => setPro(true)}
                        onMouseLeave={() => setPro(false)}
                    >
                        {cart?.map((item) => (
                            <div
                                className="nav__have__pro__card"
                                key={item.inx}
                            >
                                <img src={item?.url} alt="" />
                                <div>
                                    {item.title.length > 30
                                        ? `${item.title.slice(0, 30)}...`
                                        : item.title}
                                    <h4>{item?.price} so'm</h4>
                                </div>
                                <HiOutlineTrash
                                    onClick={() =>
                                        dispatch(removeFromCart(item))
                                    }
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="container nav__bottom">
                {NAVBAR_BOTTOM_DATA?.map((item, inx) => (
                    <span key={inx}>{item}</span>
                ))}
            </div>
        </>
    );
}

export default Navbar;
