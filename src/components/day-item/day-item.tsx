import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import './day-item.css';
import { Item } from '../../types/types';
import { useState } from 'react';
import { itemColors, noteText } from '../../const';
import HelpNote from '../help-note/help-note';
import CountDown from '../countdown/countdown';

type itemProps = {
  item: Item;
  category: number;
};

const getPriceDiff = (newPrice: number, oldPrice: number) => Math.round((newPrice / oldPrice - 1) * 100);

function DayItem ({item, category}: itemProps): JSX.Element {
  const [dayitemState, setdayitemState] = useState(
    {
      isFavorite: item.isFavorite,
      isCompared: item.isCompared
    }
  );

  return (
    <article className='dayitem'>
      <div className='dayitem__left'>
        <ul className='dayitem__tip-list list-reset'>
          <li className={`dayitem__tip dayitem__tip--sale ${item.isSale ? '' : 'dayitem__tip-hidden'}`}>Sale</li>
          <li className={`dayitem__tip dayitem__tip--hit ${item.isHit ? '' : 'dayitem__tip-hidden'}`}>Хит</li>
          <li className={`dayitem__tip dayitem__tip--new ${item.isNew ? '' : 'dayitem__tip-hidden'}`}>New</li>
        </ul>
        <div className='dayitem__sl-buttons'>
          <button className='dayitem__btn-prev' aria-label='Предыдущий слайд'>
            <svg width='10' height='16'>
              <use xlinkHref='img/sprite.svg#dropdown'/>
            </svg>
          </button>
          <button className='dayitem__btn-next' aria-label='Следующий слайд'>
            <svg width='10' height='16'>
              <use xlinkHref='img/sprite.svg#dropdown'/>
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={
            {
              nextEl: '.dayitem__btn-next',
              prevEl: '.dayitem__btn-prev',
              disabledClass: 'dayitem__btn-disabled'
            }
          }
          slidesPerView={1}
          speed={500}
          mousewheel
        >
          {item.images.map((image) => (
            <SwiperSlide
              tag='picture'
              key={image}
            >
              <source srcSet={`/img/items/${category}/${item.id}/${image}@1x.webp 1x, /img/items/${category}/${item.id}/${image}@2x.webp 2x`}
                type='image/webp'
              />
              <img
                className='dayitem__image'
                src={`/img/items/${category}/${item.id}/${image}@1x.png`}
                srcSet={`/img/items/${category}/${item.id}/${image}@2x.png 2x`}
                alt={item.description}
                width='550'
                height='550'
              />
            </SwiperSlide>)
          )}
        </Swiper>
      </div>
      <div className='dayitem__right'>
        <div className='dayitem__rating'>
          <div className='dayitem__rating-stars' aria-label='Рейтинг товара'>
            <span style={{ width: `${item.rating * 20}%` }}/>
          </div>
          <span className='dayitem__rating-value'>{item.rating}</span>
        </div>
        <h3 className='dayitem__heading secondary-heading'>{item.description}</h3>
        <span className='dayitem__vendor-code'>Артикул: {item.vendorCode}</span>
        <div className='dayitem__prices-wrapper'>
          <p className='dayitem__prices'>
            <span className='dayitem__new-price'>{`${item.newPrice.toLocaleString('ru')} ₽`}</span>
            <span className={`dayitem__old-price ${item.oldPrice ? '' : 'dayitem__old-price--hidden'}`}>{`${item.oldPrice?.toLocaleString('ru') ?? ''} ₽`}</span>
          </p>
          <span className={`dayitem__price-diff ${item.isSale ? '' : 'dayitem__diff--hidden'}`}>{`${item.oldPrice ? getPriceDiff(item.newPrice, item.oldPrice) : ''}%`}</span>
          <CountDown block='dayitem'/>
        </div>
        <div className='dayitem__color-wrapper'>
          <span>Цвет</span>
          <p className='dayitem__colors'>
            {
              item.materials.map((el) => (
                <span key={el} className='dayitem__color' style={{backgroundColor: itemColors[el]}}/>
              ))
            }
          </p>
        </div>
        <div className='dayitem__sizes-wrapper'>
          <p className='dayitem__info'>
            <span>Размер</span>
            <HelpNote block='dayitem' noteText={noteText}/>
          </p>
          <p className='dayitem__sizes'>
            {
              item.sizes?.map((el) => (
                <button key={el} className='dayitem__size' type='button'>{el.toLocaleString('ru')}</button>
              ))
            }
          </p>
        </div>
        <div className='dayitem__buttons'>
          <div className='dayitem__cart'>
            <button className='dayitem__add-to-cart button-basic' type='button'>В корзину</button>
            <button className='dayitem__click-buy button-basic' type='button'>Купить в 1 клик</button>
          </div>
          <div className='dayitem__controls'>
            <button
              className={`dayitem__control dayitem__control--favorite ${dayitemState.isFavorite ? 'active' : ''}`}
              type='button'
              onClick={() => setdayitemState({...dayitemState, isFavorite: !dayitemState.isFavorite})}
            >
              <span>
                <svg width='24' height='24' fill={dayitemState.isFavorite ? '#E24B33' : '#C9C9C9'}>
                  <use xlinkHref='img/sprite.svg#heart'/>
                </svg>
                Сохранить
              </span>
            </button>
            <button
              className={`dayitem__control dayitem__control--compare ${dayitemState.isCompared ? 'active' : ''}`}
              type='button'
              onClick={() => setdayitemState({...dayitemState, isCompared: !dayitemState.isCompared})}
            >
              <span>
                <svg width='20' height='20' stroke={dayitemState.isCompared ? '#000000' : '#C9C9C9'}>
                  <use xlinkHref='img/sprite.svg#chart'/>
                </svg>
                Сравнить
              </span>
            </button>
            <button
              className='dayitem__control dayitem__control--share'
              type='button'
            >
              <span>
                <svg width='20' height='20' fill='#C9C9C9'>
                  <use xlinkHref='img/sprite.svg#share'/>
                </svg>
                Поделиться
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DayItem;
