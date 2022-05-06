import * as React from "react";
import {
  DetailsContainer,
  ProductImages,
  ProductImage,
  ProductInfo,
  Attribute,
  AddButton,
  AttributeButton,
  ProductName,
  ProductBrand,
  ProductPrice,
  AttributeSwatch,
} from "../../styles/productDetails";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { ProductDetailsTypes } from "../../types";
import { Get_Product } from "../../queries";
import { connect } from "react-redux";
import { addToCart, getTotals } from "../../redux/cartSlice";
import { initialProduct } from "../../product.state";
import { toast } from "react-toastify";
import { NoStyleDiv } from "../../styles/cart";
import { ProductDetailsProps } from "../../props";

class ProductDetails extends React.Component<
  ProductDetailsProps,
  ProductDetailsTypes
> {
  constructor(props: any) {
    super(props);
    this.state = {
      product: { ...initialProduct },
      imagePreview: "",
      attributes: [],
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
    let attribute = this.state.attributes;
    const existingAttribute = attribute.findIndex((a: any) => a.attr === attr);
    if (existingAttribute >= 0) {
      attribute.splice(existingAttribute, 1, { itm, attr });
    } else {
      attribute.push({ itm, attr });
    }
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
    return (
      <>
        <DetailsContainer>
          <>
            <ProductImages>
              {this.state.product &&
                this.state.product.gallery?.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt="product-img"
                    height={80}
                    width={150}
                    onMouseOver={() => this.setState({ imagePreview: img })}
                    style={{ cursor: "pointer" }}
                  />
                ))}
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
              <NoStyleDiv>
                <ProductBrand>{this.state.product.brand}</ProductBrand>
                <ProductName>{this.state.product.name}</ProductName>
              </NoStyleDiv>

              {this.state.product.attributes.map((attr) => (
                <NoStyleDiv key={attr.id}>
                  <Attribute>{attr.name}:</Attribute>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    {attr.type === "swatch" &&
                      attr.items.map((itm) => (
                        <AttributeSwatch
                          key={itm.id}
                          style={{
                            backgroundColor: `${itm.id}`,
                          }}
                          onClick={() => this.setAttributes(itm, attr.id)}
                        />
                      ))}

                    {attr.type !== "swatch" &&
                      attr.items.map((itm) => (
                        <AttributeButton
                          key={itm.id}
                          onClick={() => this.setAttributes(itm, attr.id)}
                        >
                          {itm.value}
                        </AttributeButton>
                      ))}
                  </div>
                </NoStyleDiv>
              ))}

              <Attribute>PRICE:</Attribute>
              {this.state.product.prices.map(
                (p) =>
                  p.currency.label === this.props.currency && (
                    <ProductPrice key={p.currency.symbol}>
                      {p.currency.symbol}
                      {p.amount}
                    </ProductPrice>
                  )
              )}

              <AddButton
                type="submit"
                onClick={() => this.addProductToCart(this.state.product)}
              >
                ADD TO CART
              </AddButton>

              <NoStyleDiv>{parse(cleanHTML)}</NoStyleDiv>
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
