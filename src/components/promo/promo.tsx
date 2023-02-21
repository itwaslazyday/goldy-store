import { useState } from 'react';
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import {promoAds} from '../../const';
import './promo.css';
import SliderButtons from '../slider-buttons/slider-buttons';

function Promo (): JSX.Element {
  const [promoState, setpromoState] = useState<number>(1);

  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__inner'>
          <h1 className='promo__heading visually-hidden'>Goldy Store - ювелирный магазин, где исполняются любые мечты!</h1>
          <Swiper
            wrapperTag='ul'
            wrapperClass='promo__list'
            modules={[Navigation, Pagination]}
            navigation={
              {
                nextEl: '.sl__btn-next',
                prevEl: '.sl__btn-prev',
                disabledClass: 'sl__btn-disabled'
              }
            }
            pagination={
              {
                el: '.promo__pagination-wrapper',
                clickable: true,
                bulletClass: 'promo__pagination-bullet',
                bulletActiveClass: 'promo__pagination-bullet-active'
              }
            }
            slidesPerView={1}
            speed={500}
            mousewheel
          >
            {
              promoAds
                .map((item) => (
                  <SwiperSlide
                    tag='li'
                    className='promo__list-item'
                    key={item.id}
                  >
                    <span className='promo__minor-text'>{item.minorText}</span>
                    <span className='promo__major-text'>{item.majorText.toUpperCase()}</span>
                    <a className='promo__details link-reset button-basic' href='#'>
                      Подробнее
                    </a>
                    <picture>
                      <source srcSet={`/img/promo/${item.id}/${item.id}@1x.webp 1x, /img/promo/${item.id}/${item.id}@2x.webp 2x`}
                        type='image/webp'
                      />
                      <img
                        className='promo__image'
                        src={`/img/promo/${item.id}/${item.id}@1x.png`}
                        srcSet={`/img/promo/${item.id}/${item.id}@2x.png 2x`}
                        alt={`${item.minorText} ${item.majorText}`}
                        width='548'
                        height='548'
                      />
                    </picture>
                  </SwiperSlide>
                ))
            }
          </Swiper>
          <div className='promo__pagination-wrapper'/>
          <SliderButtons block='promo'/>
        </div>
      </div>
    </section>
  );
}

export default Promo;
