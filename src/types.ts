export type CategoryType = {
  id: string,
  name: string,
};

export type PictureType = {
  id: string,
  url: string
};

export type ProductType = {
  title: string,
  thumbnail: string,
  price: number,
  id : string,
  available_quantity: number,
  sold_quantity: number,
  shipping?: {
    free_shipping: boolean
  }
};

export type ProductDetailsType = {
  pictures: PictureType[],
} & ProductType;

export type CartItem = {
  quantity: number
} & ProductType;

export type CarrinhoProp = {
  updateCart: (prodName: ProductType, op: string) => void,
  removeCartItem: (cartItem: ProductType) => void,
  getCartListFromStorage: (listItem: CartItem[]) => void,
  cartList: CartItem[]
};

export type CommentType = {
  email: string,
  description: string,
  rate: number
};

export type CommentTypeStorage = {
  id: string,
  comments: CommentType[]
};

export type ReduxState = {
  products: ProductType[],
  cart: CartItem[]
};
