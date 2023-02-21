import DiscountItem from '../discount-item/discount-item';
import {discounts} from '../../const';
import './discounts.css';

function Discounts (): JSX.Element {

  return (
    <section className='discounts'>
      <div className='container'>
        <div className='discounts__inner'>
          <h2 className='discounts__heading visually-hidden'>Время скидок</h2>
          <ul className='discounts__list list-reset'>
            {
              discounts.map((discount) => (
                <li
                  className='discounts__list-item'
                  key={discount.id}
                >
                  <DiscountItem discount={discount}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Discounts;
