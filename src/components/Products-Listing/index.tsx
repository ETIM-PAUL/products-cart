import React from "react";
import { gql } from "@apollo/client";
import {
  FirstContainer,
  Heading,
  CardsContainer,
  Card,
  WaterMark,
  CardTitle,
  Cart,
  Banner,
} from "../../styles/productsListing";
import { connect } from "react-redux";
import { client } from "../../App";
import { CardPropsTypes } from "../../types";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { mapDispatchToProps } from "../../redux/redux-functions";

class ProductsListing extends React.Component<
  { category: string; currency: any },
  { products: []; num: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      num: 0,
    };
  }
  componentDidMount() {
    let category = this.props.category;
    try {
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
        .then((result) => {
          this.setState({
            products: result.data.category?.products,
          });
          console.log(result.data.category?.products);
        });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevState: any) {
    let currency = this.props.currency;
    let category = this.props.category;
    if (prevState.category !== category && prevState.currency !== currency) {
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
        .then((result) => {
          this.setState({
            products: result.data.category.products,
          });
          console.log(result.data.category);
        });
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
    }
  }

  render() {
    let numm = this.state.num;
    return (
      <>
        <FirstContainer>
          <Heading>All Categories</Heading>
          <CardsContainer>
            {this.state.products?.length >= 0 &&
              this.state.products.map((x: CardPropsTypes) => (
                <Card key={x.name}>
                  <Banner>
                    <img
                      src={x.gallery[0]}
                      height={250}
                      width={250}
                      alt="Product Img"
                      style={{ margin: "auto" }}
                    />
                    {x.inStock === false && <WaterMark>Out of stock</WaterMark>}
                    <Link to={`/product/${x.id}`}>
                      <Cart>
                        <BsCart />
                      </Cart>
                    </Link>
                  </Banner>

                  <CardTitle>{x.name}</CardTitle>
                  <div style={{ padding: "5px" }}>
                    {x.prices[numm].currency.symbol}
                    {x.prices[numm].amount}
                    <br />
                  </div>
                </Card>
              ))}
          </CardsContainer>
        </FirstContainer>
      </>
    );
  }
}

export function mapStateToProps(state: any) {
  return {
    category: state.action["selectedCategory"],
    currency: state.action["selectedCurrency"],
  };
}

export default connect(mapStateToProps, null)(ProductsListing);
