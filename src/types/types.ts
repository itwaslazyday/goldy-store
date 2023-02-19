type Item = {
  categoryId: number;
  id: number,
  isFavorite: boolean,
  isCompared: boolean,
  isSale: boolean;
  isHit: boolean;
  isNew: boolean;
  oldPrice?: number;
  newPrice: number;
  description: string;
};

export type {Item};
