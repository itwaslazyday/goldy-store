import PopulatItems from '../../components/popular/popular';
import Sale from '../../components/sale/sale';
import SiteHeader from '../../components/site-header/site-header';

function MainPage (): JSX.Element {
  return (
    <main className='main'>
      <SiteHeader/>
      <PopulatItems/>
      <Sale/>
    </main>
  );
}

export default MainPage;
