import { Discount } from '../../types/types';
import './discount-item.css';

type DiscountProps = {
  discount: Discount;
};

function DiscountItem ({discount}: DiscountProps): JSX.Element {
  return (
    <article className='discount'>
      <picture>
        <source srcSet={`/img/discounts/${discount.id}@1x.webp 1x, /img/discounts/${discount.id}@2x.webp 2x`}
          type='image/webp'
        />
        <img
          className='discount__image'
          src={`/img/discounts/${discount.id}@1x.png`}
          srcSet={`/img/discounts/${discount.id}@2x.png 2x`}
          alt={discount.title}
          width='420'
          height='290'
        />
      </picture>
      <div className='discount__text-wrapper'>
        <p className='discount__title'>{discount.title.toUpperCase()}</p>
        <p className='discount__value' style={{backgroundColor: `${discount.tipColor}`}}>До <span>{`-${discount.value}%`}</span></p>
      </div>
    </article>
  );
}

export default DiscountItem;
