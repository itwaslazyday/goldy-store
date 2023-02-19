import { Item } from './types/types';

const cities: string[] = ['Санкт-Петербург', 'Москва', 'Нижний Новгород', 'Ростов-на-Дону'];

const controls = [
  {
    id: 'favorite',
    label: 'Избранные позиции'
  },
  {
    id: 'chart',
    label: 'Сравнить товары перед покупкой'
  },
  {
    id: 'cart',
    label: 'Ваша корзина'
  }
];

const menu: string[] = ['Каталог', 'Акции', 'Бренды', 'Магазины', 'О нас', 'Доставка и оплата', 'Статьи'];

const categories = [
  {
    id: 1,
    name: 'rings',
    title: 'Кольца',
    isSale: true
  },
  {
    id: 2,
    name: 'earrings',
    title: 'Серьги',
    isSale: true
  },
  {
    id: 3,
    name: 'wedding_rings',
    title: 'Помолвочные кольца'
  },
  {
    id: 4,
    name: 'bracelets',
    title: 'Браслеты',
    isSale: true
  },
  {
    id: 5,
    name: 'necklaces',
    title: 'Колье и подвески'
  },
  {
    id: 6,
    name: 'watches',
    title: 'Часы',
    isSale: true
  }
];

const items: Item[] = [
  {
    categoryId: 2,
    id: 220,
    isFavorite: false,
    isCompared: false,
    isSale: true,
    isNew: false,
    isHit: true,
    oldPrice: 53000,
    newPrice: 39000,
    description: 'Вечерние серьги с яркими аметистами',
  },
  {
    categoryId: 4,
    id: 420,
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: false,
    isHit: false,
    newPrice: 70000,
    description: 'Плетеный золотой браслет с топазами',
  },
  {
    categoryId: 1,
    id: 120,
    isFavorite: false,
    isCompared: false,
    isSale: true,
    isNew: false,
    isHit: false,
    oldPrice: 65000,
    newPrice: 41000,
    description: 'Стильное кольцо из белого золота c бриллиантами',
  },
  {
    categoryId: 1,
    id: 121,
    isFavorite: true,
    isCompared: true,
    isSale: false,
    isNew: false,
    isHit: true,
    newPrice: 56000,
    description: 'Стильное кольцо из белого золота c бриллиантами',
  },
  {
    categoryId: 1,
    id: 122,
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: false,
    isHit: false,
    newPrice: 37500,
    description: 'Стильное кольцо из белого золота c бриллиантами',
  },
  {
    categoryId: 1,
    id: 123,
    isFavorite: false,
    isCompared: true,
    isSale: false,
    isNew: true,
    isHit: false,
    newPrice: 39200,
    description: 'Стильное кольцо из белого золота c бриллиантами',
  },
  {
    categoryId: 1,
    id: 124,
    isFavorite: false,
    isCompared: true,
    isSale: false,
    isNew: true,
    isHit: false,
    newPrice: 39200,
    description: 'Стильное кольцо из белого золота c бриллиантами',
  },
];

export {cities, controls, menu, categories, items};
