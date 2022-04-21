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