import { Discount } from '../../types/types';
import './discount-item.css';

type DiscountProps = {
  discount: Discount;
};

function DiscountItem ({discount}: DiscountProps): JSX.Element {
  return (
    <>
      <picture>
        <source srcSet={`/img/discounts/${discount.id}@1x.webp 1x, /img/discounts/${discount.id}@2x.webp 2x`}
          type='image/webp'
        />
        <img
          className='article__image'
          src={`/img/artdiscountsicles/${discount.id}@1x.png`}
          srcSet={`/img/discounts/${discount.id}@2x.png 2x`}
          alt={discount.title}
          width='420'
          height='290'
        />
      </picture>
      <span></span>
    </>
  );
}

export default DiscountItem;
