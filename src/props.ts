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
  onClickOutside:any
}