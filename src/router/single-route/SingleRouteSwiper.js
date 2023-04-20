import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

function SingleRouteSwiper({ image }) {
    return (
        <div className="single-route-swiper">
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SingleRouteSwiper;
