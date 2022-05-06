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

export type ProductDetailsProps = {
params: { id: string };
query: { data: any };
currency: string;
addToCart: any;
getTotals: any;
}