import { client } from "./App";
import {gql} from "@apollo/client"

export const Get_Product = (id: string) =>
  client.query({
    query: gql`
      query product($id: String!) {
        product(id: $id) {
          id
          name
          inStock
          gallery
          description
          category
          brand
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
        }
      }
    `,
    variables: { id: id },
  });

  export const Get_Category = () => 
  client
      .query({
        query: gql`
          query categories {
            categories {
              name
            }
          }
        `,
      })

  export const Get_Currency = () => 
      client
      .query({
        query: gql`
          query currencies {
            currencies {
              label
              symbol
            }
          }
        `,
      })

  export const Get_ProductList = (category: string) => 
      client
      .query({
        query: gql`
          query category {
            category(input: { title: "${category}" }) {
              name
              products {
                id
                name
                inStock
                gallery
                description
                category
                brand
                attributes {
                  id
                  name
                  type
                  items {
                    displayValue
                    value
                    id
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
              }
            }
          }
        `,
      })