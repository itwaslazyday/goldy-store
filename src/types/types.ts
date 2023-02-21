type Item = {
  categoryId: number;
  id: number;
  images: string[];
  isFavorite: boolean;
  isCompared: boolean;
  isSale: boolean;
  isHit: boolean;
  isNew: boolean;
  oldPrice?: number;
  newPrice: number;
  description: string;
  materials: string[];
  sizes?: number[];
};

type Article = {
  id: number;
  title: string;
  date: string;
};

type Discount = {
  title: string;
  value: number;
  id: number;
  tipColor: string;
};

type Promo = {
  minorText: string;
  majorText: string;
  id: number;
};

export type {Item, Article, Discount, Promo};
