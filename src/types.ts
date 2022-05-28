
export type TopNavTypes = {
  products: [];
    categories: [];
    category: string;
    currencies:[];
    currency:string
    currencySymbol:string
    currencySwitchDisplay: boolean
    cartOverlayDisplay: boolean
};

export type CartTypes = {
  cartItems:[]
  attribute:string
};

export type CardPropsTypes = {
  name: string;
  brand: string;
  id:string;
  prices: any;
  gallery: ["strings"];
  inStock: boolean;
  attributes:[]
}

export type ProductDetailsTypes = {
product: Product;
imagePreview: string;
attributes: any;
attributesLength: number;
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

export interface ItemProps extends Product {
  cartQuantity:number
  imageIndex:number
  selectedAttributes:any
}