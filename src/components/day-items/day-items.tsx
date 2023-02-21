import{ Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {items} from '../../const';
import DayItem from '../day-item/day-item';
import SliderButtons from '../slider-buttons/slider-buttons';
import './day-items.css';

function DayItems (): JSX.Element {

  return (
    <section className='dayitems'>
      <div className='container'>
        <div className='dayitems__inner'>
          <h2 className='dayitems__heading secondary-heading'>Товар дня</h2>
          <SliderButtons block='dayitems'/>
          <Swiper
            wrapperTag='ul'
            wrapperClass='dayitems__list'
            modules={[Navigation]}
            navigation={
              {
                nextEl: '.dayitems__btn-next',
                prevEl: '.dayitems__btn-prev',
                disabledClass: 'sl__btn-disabled'
              }
            }
            slidesPerView={1}
            speed={500}
            mousewheel
          >
            {
              items.filter((item) => item.isDayItem).reverse().map((item) => (
                <SwiperSlide
                  tag='li'
                  className='dayitems__list-item'
                  key={item.id}
                >
                  <DayItem item={item} category={item.categoryId}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default DayItems;
