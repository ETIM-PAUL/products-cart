import React from "react";
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
import { CardPropsTypes } from "../../types";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Get_ProductList } from "../../queries";
import { addToCart, getTotals } from "../../redux/cartSlice";

class ProductsListing extends React.Component<
  { category: string; currency: string; addToCart: any; getTotals: any },
  { products: []; category: string; currency: string; attribute: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      category: this.props.category,
      currency: this.props.currency,
      attribute: [],
    };
  }

  addProductToCart(product: {}, attribute: any) {
    attribute.forEach((element: any) => {
      let itm = element.items[0];
      let attr = element.id;
      this.state.attribute.push({ itm, attr });
    });
    let attr = this.state.attribute;
    this.props.addToCart({ product, attr });
    this.setState({ attribute: [] });
    this.props.getTotals();
  }
  componentDidMount() {
    let category = this.props.category;
    try {
      Get_ProductList(category).then((result) => {
        this.setState({
          products: result.data.category?.products,
          category: result.data.category?.name,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevState: any) {
    let currency = this.props.currency;
    let category = this.props.category;
    if (prevState.category !== category || prevState.currency !== currency) {
      Get_ProductList(category).then((result) => {
        this.setState({
          products: result.data.category.products,
        });
      });
    }
  }

  render() {
    return (
      <>
        <FirstContainer>
          <Heading>{this.props.category.toUpperCase()} CATEGORIES</Heading>
          <CardsContainer>
            {this.state.products?.length >= 0 &&
              this.state.products.map((x: CardPropsTypes) => (
                <Card key={x.name}>
                  <Banner>
                    <Link to={`/product/${x.id}`}>
                      <img
                        src={x.gallery[0]}
                        height={250}
                        width={305}
                        alt="Product Img"
                      />
                      {x.inStock === false && (
                        <WaterMark>Out of stock</WaterMark>
                      )}
                    </Link>
                    <Cart>
                      <BsCart
                        onClick={() => this.addProductToCart(x, x.attributes)}
                      />
                    </Cart>
                  </Banner>

                  <CardTitle>{x.name}</CardTitle>
                  <div style={{ padding: "5px" }}>
                    {x.prices.map(
                      (p: any) =>
                        p.currency.label === this.props.currency && (
                          <p key={p.currency.symbol}>
                            {p.currency.symbol}
                            {p.amount}
                          </p>
                        )
                    )}
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
    category: state.selection["selectedCategory"],
    currency: state.selection["selectedCurrency"],
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing);
