export type TopNavTypes = {
  products: [];
    categories: [];
    category: string;
    currencies:[];
    currency:string
};

export type CartTypes = {
  cartItems:[]
  categories: [];
    category: string;
    currencies:[];
    currency:string
};

export type CardPropsTypes = {
  name: string;
  id:string;
  prices: any;
  gallery: ["strings"];
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [];
  description: string;
  category: string;
  brand: string;
  attributes: [
    {
      id: string;
      name: string;
      type: string;
      items: [
        {
          displayValue: string;
          value: string;
          id: string;
        }
      ];
    }
  ];
  prices: [
      {
        currency: {
          label:string,
          symbol:string
        },
        amount:number
      }
  ];
}