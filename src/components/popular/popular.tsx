import { categories } from '../../const';
import './popular.css';

function PopulatItems (): JSX.Element {
  return (
    <section className='popular'>
      <div className='container'>
        <div className='popular__inner'>
          <h2 className='popular__heading secondary-heading'>Популярные категории</h2>
          <ul className='popular__list list-reset'>
            {
              categories.map((item) => (
                <li className='popular__list-item' key={item.id}>
                  <a className='popular__category-link link-reset' href='#'>
                    <picture>
                      <source srcSet={`/img/popular/${item.name}@1x.webp 1x, /img/popular/${item.name}@2x.webp 2x`}
                        type='image/webp'
                      />
                      <img
                        className='popular__category-image'
                        src={`/img/popular/${item.name}@1x.png`}
                        srcSet={`/img/popular/${item.name}@2x.png 2x`}
                        alt={item.title}
                      />
                    </picture>
                    <h3 className='popular__category-title tertiary-heading'>{item.title}</h3>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PopulatItems;
