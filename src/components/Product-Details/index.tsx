import * as React from "react";
import {
  DetailsContainer,
  ProductImages,
  ProductImage,
  ProductInfo,
  Attribute,
  AddButton,
  AttributeButton,
  ClickedAttributeButton,
} from "../../styles/productDetails";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import parse, { attributesToProps } from "html-react-parser";
import { Product } from "../../types";
import { Get_Product } from "../../queries";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { addToCart, getTotals } from "../../redux/cartSlice";
import { initialProduct } from "../../product.state";
import { toast } from "react-toastify";

class ProductDetails extends React.Component<
  {
    params: { id: string };
    query: { data: any };
    currency: string;
    addToCart: any;
    getTotals: any;
  },
  {
    product: Product;
    imagePreview: string;
    currentCurrency: any;
    attributes: any;
    isClicked: Boolean;
    attributesLength: number;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: { ...initialProduct },
      imagePreview: "",
      currentCurrency: this.props.currency,
      attributes: [],
      isClicked: false,
      attributesLength: 0,
    };
  }
  addProductToCart(product: { attributes: any }) {
    let attr = this.state.attributes;
    if (product?.attributes.length !== attr.length) {
      toast("Please select an attribute for each attributes", {
        position: "top-center",
      });
    } else if (product?.attributes.length === attr.length) {
      this.props.addToCart({ product, attr });
      this.props.getTotals();
    }
  }

  setAttributes(itm: {}, attr: string) {
    this.setState({ isClicked: true });
    let attribute = this.state.attributes;
    const existingAttribute = attribute.findIndex((a: any) => a.attr === attr);
    if (existingAttribute >= 0) {
      attribute.splice(existingAttribute, 1, { itm, attr });
    } else {
      attribute.push({ itm, attr });
    }
    // this.setState({ attributes: [] });
  }

  componentDidMount() {
    let { id } = this.props.params;
    Get_Product(id).then((res) => {
      this.setState({
        product: res.data.product,
        imagePreview: res.data.product.gallery[0],
        attributesLength: res.data.product.attributes.length,
      });
    });
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
                            height: "20px",
                            width: "20px",
                            border: "1px solid black",
                            cursor: "pointer",
                          }}
                          onClick={() => this.setAttributes(itm, attr.id)}
                        />
                      ))}

                    {attr.type !== "swatch" &&
                      attr.items.map((itm) => (
                        <AttributeButton
                          key={itm.id}
                          onClick={() => this.setAttributes(itm, attr.id)}
                          style={
                            this.state.isClicked
                              ? {
                                  backgroundColor: "black",
                                  color: "white",
                                }
                              : {}
                          }
                        >
                          {itm.value}
                        </AttributeButton>
                      ))}
                  </div>
                </>
              ))}
              <Attribute>PRICE:</Attribute>
              {this.state.product.prices.map(
                (p) =>
                  p.currency.label === this.props.currency && (
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
    currency: state.selection["selectedCurrency"],
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
  };
}

const Prop = (props: any) => <ProductDetails {...props} params={useParams()} />;
export default connect(mapStateToProps, mapDispatchToProps)(Prop);
