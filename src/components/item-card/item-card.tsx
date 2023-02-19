// import { useState } from 'react';
// import { categories } from '../../const';
import './item-card.css';
import { Item } from '../../types/types';

type itemProps = {
  item: Item;
  category: number;
};

const getPriceDiff = (newPrice: number, oldPrice: number) => Math.round((newPrice / oldPrice - 1) * 100);

function ItemCard ({item, category}: itemProps): JSX.Element {
  // const [saleState, setSaleState] = useState<number>(1);

  return (
    <article className='card'>
      <ul className='card__tip-list list-reset'>
        <li className={`card__tip card__tip--sale ${item.isSale ? '' : 'card__tip-hidden'}`}>Sale</li>
        <li className={`card__tip card__tip--hit ${item.isHit ? '' : 'card__tip-hidden'}`}>Хит</li>
        <li className={`card__tip card__tip--new ${item.isNew ? '' : 'card__tip-hidden'}`}>New</li>
      </ul>
      <div className='card__controls'>
        <button className={`card__controls-favorite ${item.isFavorite ? 'active' : ''}`} >
          <svg width='24' height='24' fill={item.isFavorite ? '#E24B33' : '#C9C9C9'}>
            <use xlinkHref='img/sprite.svg#heart'/>
          </svg>
        </button>
        <button className={`card__controls-compare ${item.isCompared ? 'active' : ''}`}>
          <svg width='24' height='24' fill={item.isCompared ? '#000000' : '#C9C9C9'}>
            <use xlinkHref='img/sprite.svg#eye'/>
          </svg>
        </button>
      </div>
      <picture>
        <source srcSet={`/img/items/${category}/${item.id}@1x.webp 1x, /img/items/${category}/${item.id}@2x.webp 2x`}
          type='image/webp'
        />
        <img
          className='card__image'
          src={`/img/items/${category}/${item.id}@1x.png`}
          srcSet={`/img/items/${category}/${item.id}@2x.png 2x`}
          alt={item.description}
          width='200'
          height='200'
        />
      </picture>
      <div className='card__prices-wrapper'>
        <p className='card__prices'>
          <span className='card__new-price'>{`${item.newPrice} ₽`}</span>
          <span className={`card__old-price ${item.isSale ? '' : 'card__old-price--hidden'}`}>{`${item.oldPrice} ₽`}</span>
        </p>
        <span className={`card__price-diff ${item.isSale ? '' : 'card__diff--hidden'}`}>{`${item.oldPrice ? getPriceDiff(item.newPrice, item.oldPrice) : ''}%`}</span>
      </div>
      <p className='card__description'>{item.description}</p>
    </article>
  );
}

export default ItemCard;
