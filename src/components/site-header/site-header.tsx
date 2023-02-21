import {cities, controls, menu} from '../../const';
import './site-header.css';

function SiteHeader (): JSX.Element {
  return (
    <header className='page-header header'>
      <div className='container'>
        <div className='header__inner'>
          <nav className='header__nav nav'>
            <div className='nav__wrapper nav__wrapper--top'>
              <a className='nav__logo-link'>
                <img className='nav__logo-image' src='img/logo.svg' alt='Логотип магазина Goldy Store' width='183' height='52'/>
              </a>
              <label className='nav__city-label' aria-label='Выберите ваш город'>
                <select
                  className='nav__city-select'
                  name='city'
                  id='city'
                >
                  {cities.map((item) => (
                    <option value={item} key={item}>{item}</option>)
                  )}
                </select>
              </label>
              <a className='nav__call-link link-reset' href='tel: 88007852535' aria-label='Позвонить нам'>8 800 785-25-35</a>
              <div className='nav__authorization'>
                <a className='nav__login link-reset' href='#'>Вход</a>
                <a className='nav__signup link-reset' href='#'>Регистрация</a>
              </div>
              <ul className='nav__controls-list list-reset'>
                {controls.map((item) => (
                  <li className='nav__controls-item' key={item.id}>
                    <button className={`nav__control nav__control--${item.id }`} type='button' aria-label={item.label}>
                      <svg width='20' height='20' stroke={item.id === 'chart' ? '#303030' : ''}>
                        <use xlinkHref={`img/sprite.svg#${item.id}`}/>
                      </svg>
                      {item.id === 'favorite' ? <span className='nav__favourite-qty'>23</span> : ''}
                    </button>
                  </li>)
                )}
              </ul>
            </div>
            <div className='nav__wrapper nav__wrapper--bottom'>
              <ul className='nav__menu-list list-reset'>
                {menu.map((item) => (
                  <li className='nav__menu-item' key={item}>
                    <a className='nav__menu-link link-reset' href='#'>{item.toUpperCase()}</a>
                  </li>)
                )}
              </ul>
              <form className='nav__search-form' method='POST' action='' target='_self'>
                <input className='nav__search-input' type='text' placeholder='Поиск по сайту'/>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
