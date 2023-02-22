import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import './item-card.css';
import { Item } from '../../types/types';
import { useState } from 'react';

type itemProps = {
  item: Item;
  category: number;
};

const getPriceDiff = (newPrice: number, oldPrice: number) => Math.round((newPrice / oldPrice - 1) * 100);

function ItemCard ({item, category}: itemProps): JSX.Element {
  const [cardState, setCardState] = useState(
    {
      isOpened: false,
      isFavorite: item.isFavorite,
      isCompared: item.isCompared
    }
  );

  return (
    <article className={`card ${cardState.isOpened ? 'card--opened' : ''}`}>
      <ul className='card__tip-list list-reset'>
        <li className={`card__tip card__tip--sale ${item.isSale ? '' : 'card__tip-hidden'}`}>Sale</li>
        <li className={`card__tip card__tip--hit ${item.isHit ? '' : 'card__tip-hidden'}`}>Хит</li>
        <li className={`card__tip card__tip--new ${item.isNew ? '' : 'card__tip-hidden'}`}>New</li>
      </ul>
      <div className='card__controls'>
        <button
          className={`card__controls-favorite ${cardState.isFavorite ? 'active' : ''}`}
          type='button'
          aria-label='Добавить в избранное'
          onClick={() => setCardState({...cardState, isFavorite: !cardState.isFavorite})}
        >
          <svg width='24' height='24' fill={cardState.isFavorite ? '#E24B33' : '#C9C9C9'}>
            <use xlinkHref='img/sprite.svg#heart'/>
          </svg>
        </button>
        <button
          className={`card__controls-compare ${cardState.isCompared ? 'active' : ''}`}
          type='button'
          aria-label='Добавить к сравнению'
          onClick={() => setCardState({...cardState, isCompared: !cardState.isCompared})}
        >
          <svg width='24' height='24' fill={cardState.isCompared ? '#000000' : '#C9C9C9'}>
            <use xlinkHref='img/sprite.svg#eye'/>
          </svg>
        </button>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={
          {
            el: '.card__pagination-wrapper',
            clickable: true,
            bulletClass: 'card__pagination-bullet',
            bulletActiveClass: 'card__pagination-bullet-active'
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
              className='card__image'
              src={`/img/items/${category}/${item.id}/${image}@1x.png`}
              srcSet={`/img/items/${category}/${item.id}/${image}@2x.png 2x`}
              alt={item.description}
              width='200'
              height='200'
            />
          </SwiperSlide>)
        )}
        <div className='card__pagination-wrapper'/>
      </Swiper>
      <div className='card__prices-wrapper'>
        <p className='card__prices'>
          <span className='card__new-price'>{`${item.newPrice.toLocaleString('ru')} ₽`}</span>
          <span className={`card__old-price ${item.oldPrice ? '' : 'card__old-price--hidden'}`}>{`${item.oldPrice?.toLocaleString('ru') ?? ''} ₽`}</span>
        </p>
        <span className={`card__price-diff ${item.isSale ? '' : 'card__diff--hidden'}`}>{`${item.oldPrice ? getPriceDiff(item.newPrice, item.oldPrice) : ''}%`}</span>
      </div>
      <p className='card__description'>{item.description}</p>
      <button
        className={`card__more-options ${cardState.isOpened ? 'card__more-options--rotate' : ''}`}
        aria-label='Посмотреть дополнительные опции'
        type='button'
        onClick={() => setCardState({...cardState, isOpened: !cardState.isOpened})}
      />
      <div className={`card__options ${!cardState.isOpened ? 'card__options-hidden' : ''}`}>
        <select
          className='card__select card__select--material'
          name='material'
          id='material'
        >
          {item.materials.map((material) => (
            <option value={material} key={material}>{material}</option>)
          )}
        </select>
        <select
          className={`card__select card__select--size ${item.categoryId !== 1 ? 'card__select--hidden' : ''}`}
          name='size'
          id='size'
        >
          {item.sizes?.map((size) => (
            <option value={size} key={size}>{`Размер: ${size.toLocaleString('ru')}`}</option>)
          )}
        </select>
      </div>
    </article>
  );
}

export default ItemCard;
