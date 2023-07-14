import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./swiper1.module.scss";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function Swiper1() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={style.swiper1}
      >
        <SwiperSlide
          className={
            style.swiper1__slide +
            " " +
            "bg-[url('https://scontent.ffru6-1.fna.fbcdn.net/v/t39.30808-6/273989223_4733024010159945_4218337873917159400_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=YK5xfNzJXdUAX-qPuqC&_nc_ht=scontent.ffru6-1.fna&oh=00_AfBWgfUcZUSdgAAA5AJv_Edum24hY4fqBBnQys0to-MkNg&oe=64B56186')]"
          }
        >
          <div className={style.swiper1__slide_in}>
            <h3 className={style["swiper1__slide-title"]}>
              Сделано в Кыргызстане!
            </h3>
            <p className={style["swiper1__slide-subtitle"]}>
              Поставка осуществляется как по всему Кыргызстану, так и за
              границу. Свяжитесь с нами чтобы узнать все подробности.
            </p>
            <button className={style["swiper1__slide-btn"]}>
              {t("Связаться")}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={
            style.swiper1__slide +
            " " +
            "bg-[url('https://thumb.tildacdn.com/tild3764-6632-4466-b437-303261336664/-/format/webp/DSC08604.jpg')]"
          }
        >
          <div className={style.swiper1__slide_in}>
            <h3 className={style["swiper1__slide-title"]}>На рынке 10 лет</h3>
            <p className={style["swiper1__slide-subtitle"]}>
              Вся продукция "Арония Фарм" сертифицирована и качественна
            </p>
            <button className={style["swiper1__slide-btn"]}>
              {t("Связаться")}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
