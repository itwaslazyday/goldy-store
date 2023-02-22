import { useState } from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { categories, items } from '../../const';
import ItemCard from '../item-card/item-card';
import './sale.css';
import SliderButtons from '../slider-buttons/slider-buttons';

function Sale (): JSX.Element {
  const [saleState, setSaleState] = useState<number>(1);

  return (
    <section className='sale'>
      <div className='container'>
        <div className='sale__inner'>
          <h2 className='sale__heading secondary-heading'>Распродажа</h2>
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
          <SliderButtons block='sale'/>
          <Swiper
            wrapperTag='ul'
            wrapperClass='sale__item-list'
            modules={[Navigation]}
            navigation={
              {
                nextEl: '.sale__btn-next',
                prevEl: '.sale__btn-prev',
                disabledClass: 'sl__btn-disabled'
              }
            }
            slidesPerView={4}
            speed={500}
            spaceBetween={20}
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
