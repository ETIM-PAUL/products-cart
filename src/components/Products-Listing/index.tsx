import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  FirstContainer,
  Heading,
  CardsContainer,
  Card,
  WaterMark,
} from "../../styles/productsListing";
import { connect } from "react-redux";
import { client } from "../../App";

class ProductsListing extends React.Component<
  { category: string; currency: string },
  { products: []; category: string; num: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      category: this.props.category,
      num: 0,
    };
  }
  componentDidMount() {
    console.log(this.props.currency);
  }
  componentDidUpdate(prevState: any) {
    let category = this.props.category;
    let currency = this.props.currency;
    if (prevState.category !== category || prevState.currency !== currency) {
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
        .then((result) =>
          this.setState({ products: result.data.category.products })
        );
      if (this.props.currency?.includes("USD")) {
        this.setState({ num: 0 });
      }
      if (this.props.currency?.includes("GBP")) {
        this.setState({ num: 1 });
      }
      if (this.props.currency?.includes("AUD")) {
        this.setState({ num: 2 });
      }
      if (this.props.currency?.includes("JPY")) {
        this.setState({ num: 3 });
      }
      if (this.props.currency?.includes("RUB")) {
        this.setState({ num: 4 });
      }
      console.log(category);
    }
    console.log(this.state.num);
  }

  render() {
    let numm = this.state.num;
    return (
      <>
        <FirstContainer>
          <Heading>All Categories</Heading>
          <CardsContainer>
            {this.state.products.length >= 0 &&
              this.state.products.map(
                (x: {
                  name: string;
                  prices: any;
                  gallery: ["strings"];
                  inStock: boolean;
                }) => (
                  <Card key={x.name}>
                    {x.inStock === false && <WaterMark>Out of stock</WaterMark>}
                    <img
                      src={x.gallery[0]}
                      height={250}
                      width={250}
                      alt="pic"
                    />

                    <div style={{ color: " #80808091", paddingTop: "15px" }}>
                      {x.name}
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                      {x.prices[numm].currency.symbol}
                      {x.prices[numm].amount}
                      <br />
                    </div>
                  </Card>
                )
              )}
          </CardsContainer>
        </FirstContainer>
      </>
    );
  }
}

function mapDispatchToProps(state: any) {
  return {
    category: state.action["selectedCategory"],
    currency: state.action["selectedCurrency"],
  };
}

export default connect(mapDispatchToProps, null)(ProductsListing);
