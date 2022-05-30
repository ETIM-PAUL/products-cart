export type CartProps = {
  cart: [];
    decreaseCart: any;
    addToCart: any;
    totalQuantity: number;
    totalAmount: number;
    getTotals: any;
    currency: string;
    changeImageUp: any;
    changeImageDown: any;
}

export type ItemProps = {
  item:any
  currency: string;
  changeImageUp: any;
  changeImageDown: any;
  decreaseCart: any;
  addToCart: any;
  getTotals: any;
}

export type ItemAttributesProps = {
  currency: string;
  item:any
}

export type ItemTotal = {
  totalAmount: number;
  display:any
  currency: string;

}

export type OrderProps = {
  currency: string;

    totalQuantity: number;
    totalAmount: number;
}
export interface CartOverlayProps extends CartProps  {
  display:any
}

export type ProductDetailsProps = {
params: { id: string };
query: { data: any };
currency: string;
addToCart: any;
getTotals: any;
}

export type TopNavProps = {
  setCategory: any;
  setCurrency: any;
  totalQuantity: number;
  setTotalPrice: any;
  currency: string
  category: string
  onClickOutside:any
}