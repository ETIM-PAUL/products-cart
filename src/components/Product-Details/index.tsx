import React, { JSXElementConstructor } from "react";
import {
  DetailsContainer,
  ProductImages,
  ProductImage,
  ProductInfo,
  Attribute,
  AddButton,
  AttributeButton,
} from "../../styles/productDetails";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Product } from "../../types";
import { Get_Product } from "../../queries";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { toast } from "react-toastify";
const initialProduct: Product = {
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

class ProductDetails extends React.Component<
  {
    params: { id: string };
    query: { data: any };
    currency: string;
    addToCart: any;
  },
  { product: Product; imagePreview: string; currentCurrency: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: { ...initialProduct },
      imagePreview: "",
      currentCurrency: "",
    };
  }
  addProductToCart(product: {}) {
    // console.log(product);
    this.props.addToCart(product);
  }
  componentDidMount() {
    let { id } = this.props.params;
    Get_Product(id).then((res) => {
      this.setState({
        product: res.data.product,
        imagePreview: res.data.product.gallery[0],
        currentCurrency: this.props.currency.toString(),
      });
    });
  }
  componentDidUpdate() {
    // this.setState({ currentCurrency: this.props.currency });
  }

  render() {
    const cleanHTML = DOMPurify.sanitize(this.state.product.description, {
      USE_PROFILES: { html: true },
    });
    const returnNext = () => {
      return null;
    };
    return (
      <>
        <DetailsContainer>
          <>
            <ProductImages>
              <InfiniteScroll
                next={returnNext}
                loader={null}
                dataLength={this.state.product.gallery?.length}
                hasMore={this.state.product.gallery?.length < 50}
                endMessage={
                  <p>
                    <hr />
                    It is all, nothing more 🤐
                  </p>
                }
                scrollableTarget="scrollableDiv"
              >
                {this.state.product &&
                  this.state.product.gallery?.map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt="product-img"
                      height={150}
                      width={200}
                      onMouseOver={() => this.setState({ imagePreview: img })}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
              </InfiniteScroll>
            </ProductImages>

            <ProductImage>
              <img
                src={this.state.imagePreview}
                alt="product-preview"
                height={500}
                width={650}
              />
            </ProductImage>
            <ProductInfo>
              <div>
                <h2>
                  <b>{this.state.product.brand}</b>
                </h2>
                <p>{this.state.product.name}</p>
              </div>
              {this.state.product.attributes.map((attr) => (
                <>
                  <Attribute>{attr.name}:</Attribute>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {attr.type === "swatch" &&
                      attr.items.map((itm) => (
                        <AttributeButton
                          key={itm.id}
                          style={{
                            backgroundColor: `${itm.id}`,
                            height: "30px",
                            width: "45px",
                            border: "1px solid black",
                            cursor: "pointer",
                          }}
                        ></AttributeButton>
                      ))}

                    {attr.type !== "swatch" &&
                      attr.items.map((itm) => (
                        <AttributeButton key={itm.id}>
                          {itm.value}
                        </AttributeButton>
                      ))}
                  </div>
                </>
              ))}
              <Attribute>PRICE:</Attribute>
              {this.state.product.prices.map(
                (p) =>
                  p.currency.label === this.state.currentCurrency && (
                    <p>
                      <b>
                        {p.currency.symbol}
                        {p.amount}
                      </b>
                    </p>
                  )
              )}
              <p></p>
              <AddButton
                type="submit"
                onClick={() => this.addProductToCart(this.state.product)}
              >
                ADD TO CART
              </AddButton>
              {parse(cleanHTML)}
            </ProductInfo>
          </>
        </DetailsContainer>
      </>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    currency: state.action["selectedCurrency"],
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: (product: any) => dispatch(addToCart(product)),
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
const Prop = (props: any) => <ProductDetails {...props} params={useParams()} />;
export default connect(mapStateToProps, mapDispatchToProps)(Prop);
