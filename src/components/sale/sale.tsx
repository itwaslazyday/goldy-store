import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { categories, items } from '../../const';
import ItemCard from '../item-card/item-card';
import './sale.css';

function Sale (): JSX.Element {
  const [saleState, setSaleState] = useState<number>(1);

  return (
    <section className='sale'>
      <div className='container'>
        <div className='sale__inner'>
          <h2 className='sale__heading secondary-heading'>Распродажа</h2>
          <div className='sale__wrapper'>
            <ul className='sale__category-list list-reset'>
              {
                categories.filter((item) => item.isSale).map((item) => (
                  <button
                    className={`sale__category-tab sale__category-tab--${saleState === item.id ? 'active' : ''}`}
                    key={item.id}
                    id={`${item.id}`}
                    onClick={(evt) => setSaleState(+evt.currentTarget.id ?? 1)}
                  >
                    {item.title}
                  </button>
                ))
              }
            </ul>
            <button className='sale__btn-prev'>
              <svg width='17' height='8'>
                <use xlinkHref='img/sprite.svg#slide-prev'/>
              </svg>
            </button>
            <button className='sale__btn-next'>
              <svg width='17' height='8'>
                <use xlinkHref='img/sprite.svg#slide-next'/>
              </svg>
            </button>
          </div>
          <Swiper
            wrapperTag='ul'
            wrapperClass='sale__item-list'
            modules={[Navigation]}
            navigation={
              {
                nextEl: '.sale__btn-next',
                prevEl: '.sale__btn-prev',
                disabledClass: 'sale__btn-disabled'
              }
            }
            // pagination={
            //   {
            //     'el': '.feedbacks__pagination-wrapper',
            //     'clickable': true,
            //     'bulletClass': 'custom-bullet dot swiper-pagination-bullet',
            //     'bulletActiveClass': 'custom-bullet-active swiper-pagination-bullet-active'
            //   }
            // }
            slidesPerView={4}
            speed={500}
            spaceBetween={20}
            grabCursor
            mousewheel
          >
            {items.filter((item) => item.categoryId === saleState).length ?
              <>
                {
                  items
                    .filter((item) => item.categoryId === saleState)
                    .map((item) => (
                      <SwiperSlide
                        tag='li'
                        className='sale__item'
                        key={item.id}
                        id={`${item.id}`}
                        // onClick={(evt) => setSaleState(+evt.currentTarget.id ?? 1)}
                      >
                        <ItemCard item={item} category={saleState}/>
                      </SwiperSlide>
                    ))
                }
              </> :
              <p className='sale__message'>
                К сожалению, товары из выбранной категории пока не участвуют в распродаже.
              </p>}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Sale;
