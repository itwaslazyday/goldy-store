import { Article, Discount, Item, Promo } from './types/types';

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

const itemColors: {[index: string]: string} = {
  'Белое золото': '#D9D9D9',
  'Желтое золото': '#F1CB7E',
  'Красное золото': '#EA8C48',
  'Серебро': '#A7E492',
};

const items: Item[] = [
  {
    categoryId: 1,
    id: 120,
    vendorCode: 1012075,
    rating: 3.5,
    images: ['120-1', '120-2', '120-3'],
    isFavorite: false,
    isCompared: false,
    isSale: true,
    isNew: false,
    isHit: false,
    oldPrice: 65000,
    newPrice: 41000,
    description: 'Стильное кольцо из белого золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро'],
    sizes: [16, 17, 18]
  },
  {
    categoryId: 1,
    id: 121,
    vendorCode: 1012078,
    rating: 4.2,
    images: ['121-1', '121-2', '121-3'],
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: false,
    isHit: false,
    newPrice: 56000,
    description: 'Стильное кольцо из белого золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро'],
    sizes: [16, 17, 18]
  },
  {
    categoryId: 1,
    id: 122,
    vendorCode: 1012074,
    rating: 4.5,
    images: ['122-1', '122-2', '122-3'],
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: false,
    isHit: false,
    newPrice: 37500,
    description: 'Стильное кольцо из белого золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро'],
    sizes: [16, 17, 18]
  },
  {
    categoryId: 1,
    id: 123,
    vendorCode: 1012077,
    rating: 4.9,
    images: ['123-1', '123-2', '123-3'],
    isFavorite: false,
    isCompared: true,
    isSale: false,
    isNew: true,
    isHit: false,
    newPrice: 39200,
    description: 'Стильное кольцо из белого золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро'],
    sizes: [16, 17, 18]
  },
  {
    categoryId: 1,
    id: 125,
    vendorCode: 1012077,
    rating: 3.5,
    images: ['125-1', '125-2', '125-3'],
    isFavorite: false,
    isCompared: true,
    isSale: true,
    isNew: false,
    isHit: true,
    oldPrice: 65000,
    newPrice: 41000,
    description: 'Кольцо из белого золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро'],
    sizes: [16.5, 17.5, 18.5, 19, 19.5],
    isDayItem: true
  },
  {
    categoryId: 1,
    id: 124,
    vendorCode: 1012076,
    rating: 4.2,
    images: ['124-1', '124-2', '124-3'],
    isFavorite: true,
    isCompared: false,
    isSale: true,
    isNew: true,
    isHit: true,
    newPrice: 22000,
    oldPrice: 40000,
    description: 'Кольцо из золота c бриллиантами',
    materials: ['Белое золото', 'Желтое золото', 'Красное золото', 'Серебро'],
    sizes: [16.5, 17.5, 18.5, 19, 19.5, 20],
    isDayItem: true
  },
  {
    categoryId: 2,
    id: 220,
    vendorCode: 1379823,
    rating: 3.9,
    images: ['220-1', '220-2', '220-3'],
    isFavorite: false,
    isCompared: false,
    isSale: true,
    isNew: false,
    isHit: true,
    oldPrice: 53000,
    newPrice: 39000,
    description: 'Вечерние серьги с яркими аметистами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро']
  },
  {
    categoryId: 4,
    id: 420,
    vendorCode: 9723984,
    rating: 4.1,
    images: ['420-1', '420-2', '420-3'],
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: false,
    isHit: false,
    newPrice: 70000,
    description: 'Плетеный золотой браслет с топазами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро']
  },
  {
    categoryId: 6,
    id: 620,
    vendorCode: 9723984,
    rating: 2.1,
    images: ['620-1', '620-2', '620-3'],
    isFavorite: false,
    isCompared: false,
    isSale: false,
    isNew: true,
    isHit: true,
    newPrice: 19000,
    description: 'Золотые часы со стразами',
    materials: ['Белое золото', 'Желтое золото', 'Серебро']
  },
];

const articles: Article[] = [
  {
    id: 1,
    title: 'Обручальные кольца: тренды 2021',
    date: '21 сентября 2021'
  },
  {
    id: 2,
    title: 'Главные ювелирные тренды года',
    date: '25 сентября 2021'
  },
  {
    id: 3,
    title: 'Жемчуг: 7 малоизвестных фактов о культовом украшении',
    date: '21 сентября 2021'
  },
  {
    id: 4,
    title: 'Как отличить золото от подделки: 10 практических советов',
    date: '21 сентября 2021'
  },
];

const discounts: Discount[] = [
  {
    id: 1,
    title: 'Скидки на все украшения с бриллиантами',
    value: 50,
    tipColor: '#43807F'
  },
  {
    id: 2,
    title: 'Скидки на кольца и браслеты',
    value: 40,
    tipColor: '#E24B33'
  },
  {
    id: 3,
    title: 'Cнижение цен на обручальные кольца',
    value: 60,
    tipColor: '#E1A661'
  },
];

const promoAds: Promo[] = [
  {
    id: 1,
    minorText: 'Суперскидка до 60%',
    majorText: 'на бриллианты'
  },
  {
    id: 2,
    minorText: 'Суперскидка до 60%',
    majorText: 'на бриллианты'
  },
  {
    id: 3,
    minorText: 'Суперскидка до 60%',
    majorText: 'на бриллианты'
  },
];

const noteText = 'Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений.';

export {cities, controls, menu, categories, items, articles, discounts, promoAds, itemColors, noteText};
