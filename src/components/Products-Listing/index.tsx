import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { CardType } from "../../types";

import {
  FirstContainer,
  Heading,
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  SecondContainer,
  ThirdContainer,
} from "../../styles/productsListing";
import Tilt from "react-parallax-tilt";

class ProductsListing extends React.Component<
  {},
  { showWomen: boolean; products: []; showMen: boolean; showChildren: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      showWomen: true,
      showMen: true,
      showChildren: true,
    };
    const client = new ApolloClient({
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query categories {
            categories {
              products {
                id
                name
                inStock
                gallery
                description
                category
                brand
              }
            }
          }
        `,
      })
      .then((result) =>
        // this.setState({ products: result.data.categories })
        console.log(result)
      );
  }
  componentDidMount() {
    // getData()
  }

  render() {
    return (
      <>
        {this.state.showWomen && (
          <FirstContainer>
            <Heading>All Categories</Heading>
            <div
              style={{
                // marginTop: "15px",
                margin: "auto",
                width: "90%",
                display: "grid",
                gap: "40px",
                marginBottom: "10px",
                gridTemplateColumns: "auto auto auto auto",
              }}
            >
              {this.state.numbers.map((x) => (
                <div>
                  <div>
                    <img src={"https://picsum.photos/250/280"} alt="pic"></img>
                  </div>
                  <div style={{ color: " #80808091", paddingTop: "15px" }}>
                    Apollo Running Short
                  </div>
                  <div style={{ paddingTop: "5px" }}>$50.00</div>
                </div>
              ))}
            </div>
          </FirstContainer>
        )}
      </>
    );
  }
}

export default ProductsListing;
