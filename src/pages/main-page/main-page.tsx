import Articles from '../../components/articles/articles';
import DayItems from '../../components/day-items/day-items';
import Discounts from '../../components/discounts/discounts';
import PopulatItems from '../../components/popular/popular';
import Promo from '../../components/promo/promo';
import Sale from '../../components/sale/sale';
import SiteHeader from '../../components/site-header/site-header';

function MainPage (): JSX.Element {
  return (
    <main className='main'>
      <SiteHeader/>
      <Promo/>
      <PopulatItems/>
      <Sale/>
      <Discounts/>
      <DayItems/>
      <Articles/>
    </main>
  );
}

export default MainPage;
