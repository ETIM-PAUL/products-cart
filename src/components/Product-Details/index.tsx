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
  OutOfStock,
  ProductParse,
  ImageHover,
  AttributeStyle,
  AttributeName,
} from "../../styles/productDetails";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { ProductDetailsTypes } from "../../types";
import { Get_Product } from "../../queries";
import { connect } from "react-redux";
import { initialDetails } from "../../initialState";
import { NoStyleDiv } from "../../styles/cart";
import { ProductDetailsProps } from "../../props";
import "./details.css";
import { mapDispatchToProps, mapStateToProps } from "./util";

class ProductDetails extends React.Component<
  ProductDetailsProps,
  ProductDetailsTypes
> {
  constructor(props: any) {
    super(props);
    this.state = initialDetails;
  }

  addProductToCart(product: {}) {
    let attribute = this.state.attributes;
    this.props.addToCart({ product, attribute });
    this.props.getTotals();
    this.predefinedAttributes();
  }

  setAttributes(itm: { id: string }, attr: string) {
    let attribute = this.state.attributes;
    let a = { [attr]: itm.id };
    let ab = Object.assign(attribute, a);
    this.setState({ attributes: ab });
  }

  predefinedAttributes() {
    const attributeId = this.state.product.attributes.map((attr) => attr.id);
    const itemAttributes = this.state.product.attributes.map((attr) => attr);
    const attribute = itemAttributes.map((itm) => itm.items[0].id);
    let ab = {};
    attributeId.forEach((value1, index) => {
      const value2 = attribute[index];
      let a = { [value1]: value2 };
      ab = Object.assign(ab, a);
    });
    this.setState({ attributes: ab });
  }

  componentDidMount() {
    let { id } = this.props.params;
    Get_Product(id).then((res) => {
      this.setState({
        product: res.data.product,
        imagePreview: res.data.product.gallery[0],
      });
      this.predefinedAttributes();
    });
  }

  render() {
    const cleanHTML = DOMPurify.sanitize(this.state.product.description, {
      USE_PROFILES: { html: true },
    });
    return (
      <DetailsContainer>
        <>
          <ProductImages>
            {this.state.product.gallery.length >= 1 &&
              this.state.product.gallery?.map((img) => (
                <ImageHover
                  key={img}
                  src={img}
                  alt="product-img"
                  onMouseOver={() => this.setState({ imagePreview: img })}
                />
              ))}
          </ProductImages>

          <ProductImage>
            <img
              src={this.state.imagePreview}
              alt="product-img-preview"
              className="image"
            />
          </ProductImage>

          <ProductInfo>
            <NoStyleDiv>
              <ProductBrand>{this.state.product.brand}</ProductBrand>
              <ProductName>{this.state.product.name}</ProductName>
            </NoStyleDiv>

            {this.state.product.attributes.map((attr) => (
              <NoStyleDiv key={attr.id}>
                <AttributeName>{attr.name}:</AttributeName>
                <AttributeStyle>
                  {attr.type === "swatch" &&
                    attr.items.map((itm) => (
                      <AttributeSwatch
                        color={`${itm.id}`}
                        key={itm.id}
                        className={
                          itm.id === this.state.attributes[attr.name]
                            ? "swatchSelected"
                            : null
                        }
                        onClick={() => this.setAttributes(itm, attr.name)}
                      />
                    ))}

                  {attr.type !== "swatch" &&
                    attr.items.map((itm) => (
                      <AttributeButton
                        key={itm.id}
                        className={
                          itm.id === this.state.attributes[attr.name]
                            ? "selected"
                            : null
                        }
                        onClick={() => this.setAttributes(itm, attr.name)}
                      >
                        {itm.value}
                      </AttributeButton>
                    ))}
                </AttributeStyle>
              </NoStyleDiv>
            ))}

            <Attribute>PRICE:</Attribute>
            {this.state.product.prices.map(
              (p) =>
                p.currency.symbol === this.props.currency && (
                  <ProductPrice key={p.currency.symbol}>
                    {p.currency.symbol}
                    {p.amount}
                  </ProductPrice>
                )
            )}

            {this.state.product.inStock === true && (
              <AddButton
                type="submit"
                onClick={() => this.addProductToCart(this.state.product)}
              >
                ADD TO CART
              </AddButton>
            )}
            {this.state.product.inStock !== true && (
              <OutOfStock type="button">OUT OF STOCK</OutOfStock>
            )}
            <ProductParse>{parse(cleanHTML)}</ProductParse>
          </ProductInfo>
        </>
      </DetailsContainer>
    );
  }
}
const Prop = (props: any) => <ProductDetails {...props} params={useParams()} />;
export default connect(mapStateToProps, mapDispatchToProps)(Prop);
