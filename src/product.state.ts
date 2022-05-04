import { Product } from "./types";

export const initialProduct: Product = {
  id: "",
  name: "",
  inStock: false,
  gallery: [],
  description: "",
  category: "",
  brand: "",
  attributes: [
    {
      id: "",
      name: "",
      type: "",
      items: [
        {
          displayValue: "",
          value: "",
          id: "",
        },
      ],
    },
  ],
  prices: [
    {
      currency: {
        label: "",
        symbol: "",
      },
      amount: 0,
    },
  ],
};
