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
  ProductPrice,
  ProductInfo,
  OverlayStyle,
  CardSubTitle,
} from "../../styles/productsListing";
import { connect } from "react-redux";
import { CardPropsTypes } from "../../types";
import cart from "../../img/cart.svg";
import { Link } from "react-router-dom";
import { Get_ProductList } from "../../queries";
import { mapDispatchToProps, mapStateToProps } from "./utils";

class ProductsListing extends React.Component<
  { category: string; currency: string; addToCart: any; getTotals: any },
  { products: []; category: string; currency: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      category: this.props.category,
      currency: this.props.currency,
    };
  }

  addProductToCart(product) {
    let attribute = {};
    function predefinedAttributes() {
      const attributeId = product.attributes.map((attr: any) => attr.id);
      const itemAttributes = product.attributes.map((attr) => attr);
      const attr = itemAttributes.map((itm: any) => itm.items[0].id);
      attributeId.forEach((value1, index) => {
        const value2 = attr[index];
        let a = { [value1]: value2 };
        attribute = Object.assign(attribute, a);
      });
    }
    predefinedAttributes();
    this.props.addToCart({ product, attribute });
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
      <FirstContainer>
        <Heading>{this.props.category}</Heading>
        <CardsContainer>
          {this.state.products?.length >= 0 &&
            this.state.products.map((x: CardPropsTypes) => (
              <>
                <Card key={x.name}>
                  <Banner>
                    <Link to={`/product/${x.id}`}>
                      <img
                        src={x.gallery[0]}
                        height={320}
                        width={400}
                        alt="Product Img"
                      />
                      {x.inStock === false && (
                        <WaterMark>Out of stock</WaterMark>
                      )}
                    </Link>
                    {x.inStock === true && (
                      <Cart onClick={() => this.addProductToCart(x)}>
                        <img src={cart} alt="add product" />
                      </Cart>
                    )}
                  </Banner>
                  <Link
                    to={`/product/${x.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ProductInfo>
                      <span>
                        <CardTitle>{x.brand}</CardTitle>~{" "}
                        <CardSubTitle>{x.name}</CardSubTitle>
                      </span>
                      {x.prices.map(
                        (p: any) =>
                          p.currency.symbol === this.props.currency && (
                            <ProductPrice key={p.currency.symbol}>
                              {p.currency.symbol}
                              {p.amount}
                            </ProductPrice>
                          )
                      )}
                    </ProductInfo>
                  </Link>
                  {x.inStock === false && <OverlayStyle />}
                </Card>
              </>
            ))}
        </CardsContainer>
      </FirstContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing);
