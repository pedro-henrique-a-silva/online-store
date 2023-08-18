export type CategoryResponse = {
  id: string,
  name: string,
};

export type CardType = {
  id: string,
  title: string,
  category: string,
  thumbnail: string,
  price: number,
  description: string,
};
