import React from "react";
import { connect } from "react-redux";
import {
  Attribute,
  AttributeButton,
  NoStyleDiv,
  CartContainer,
  CartRow,
  ChangeItemQuantity,
  GalleryDiv,
  AttributesDiv,
  Heading,
  Span,
  OrderButton,
  OrderDiv,
  CartSplit,
  RelativePosition,
  AttributeSwatch,
  AttributesContainer,
  Bold,
  ProductBrand,
  ProductName,
  ProductPrice,
  CartItemIterator,
  OrderText,
  ChangeImages,
  AttributesFlex,
} from "../../styles/cart";
import { CartTypes, ItemProps } from "../../types";
import { CartProps } from "../../props";
import greaterThan from "../../img/greaterThan.svg";
import lessThan from "../../img/lessThan.svg";
import "../Product-Details/details.css";
import { mapStateToProps, mapDispatchToProps } from "./util";

class Cart extends React.Component<CartProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
  }

  decreaseCartItemQuantity(product: {}, attribute: any) {
    this.props.decreaseCart({ product, attribute });
    this.props.getTotals();
  }

  increaseCartItemQuantity(product: {}, attribute: any) {
    this.props.addToCart({ product, attribute });
    this.props.getTotals();
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.cart !== state.cartItems) {
      return {
        cartItems: props.cart,
      };
    }
    return null;
  }

  render() {
    return (
      <CartContainer>
        <Heading>CART</Heading>
        <br />
        <hr />
        {this.state.cartItems?.length > 0 ? (
          this.state.cartItems.map((item: ItemProps) => (
            <NoStyleDiv key={item.id}>
              {/* <AttributesContainer> */}
              <CartRow>
                <AttributesContainer>
                  <ProductBrand>{item.brand}</ProductBrand>
                  <ProductName>{item.name}</ProductName>
                  {item.prices?.map(
                    (p) =>
                      p.currency.symbol === this.props.currency && (
                        <ProductPrice key={p.currency.label}>
                          {p.currency.symbol}
                          {p.amount}
                        </ProductPrice>
                      )
                  )}

                  <AttributesFlex>
                    {item.attributes.map((attr: any) => (
                      <NoStyleDiv key={attr.id}>
                        <Attribute>{attr.name}:</Attribute>
                        <AttributesDiv>
                          {attr.type === "swatch" &&
                            attr.items.map((attribute: any) => (
                              <AttributeSwatch
                                key={attribute.id}
                                className={
                                  attribute.id ===
                                  item.selectedAttributes[attr.name]
                                    ? "swatchSelected"
                                    : null
                                }
                                style={{
                                  backgroundColor: `${attribute.id}`,
                                }}
                              ></AttributeSwatch>
                            ))}

                          {attr.type !== "swatch" &&
                            attr.items.map((attribute: any) => (
                              <AttributeButton
                                key={attribute.id}
                                className={
                                  attribute.id ===
                                  item.selectedAttributes[attr.name]
                                    ? "selected"
                                    : null
                                }
                              >
                                {attribute.value}
                              </AttributeButton>
                            ))}
                        </AttributesDiv>
                      </NoStyleDiv>
                    ))}
                  </AttributesFlex>
                </AttributesContainer>

                <CartSplit>
                  <CartItemIterator>
                    <ChangeItemQuantity
                      onClick={() =>
                        this.increaseCartItemQuantity(
                          item,
                          item.selectedAttributes
                        )
                      }
                    >
                      <span>+</span>
                    </ChangeItemQuantity>
                    <h4 style={{ textAlign: "center" }}>{item.cartQuantity}</h4>
                    <ChangeItemQuantity
                      onClick={() =>
                        this.decreaseCartItemQuantity(
                          item,
                          item.selectedAttributes
                        )
                      }
                    >
                      <span>-</span>
                    </ChangeItemQuantity>
                  </CartItemIterator>
                  <RelativePosition>
                    <img
                      src={item.gallery[item.imageIndex]}
                      width={200}
                      height={160}
                      alt="itemImg"
                    />

                    {item.gallery?.length > 1 && (
                      <GalleryDiv>
                        <ChangeImages
                          src={lessThan}
                          alt="changeImage"
                          onClick={() =>
                            this.props.changeImageDown(
                              item,
                              item.selectedAttributes
                            )
                          }
                        />
                        <ChangeImages
                          src={greaterThan}
                          alt="changeImage"
                          onClick={() =>
                            this.props.changeImageUp(
                              item,
                              item.selectedAttributes
                            )
                          }
                        />
                      </GalleryDiv>
                    )}
                  </RelativePosition>
                </CartSplit>
              </CartRow>
              <hr />
            </NoStyleDiv>
          ))
        ) : (
          <NoStyleDiv>No Items in Cart</NoStyleDiv>
        )}
        {this.props.cart?.length > 0 && (
          <OrderDiv>
            <Span>
              Tax 21%: <Bold>{this.props.currency}15.00</Bold>
            </Span>
            <Span>
              Qauntity: <Bold>{this.props.totalQuantity}</Bold>
            </Span>
            <NoStyleDiv>
              <Span>
                Total:{" "}
                <Bold>
                  {this.props.currency}
                  {this.props.totalAmount}
                </Bold>
              </Span>
            </NoStyleDiv>
            <OrderButton>
              <OrderText>ORDER</OrderText>
            </OrderButton>
          </OrderDiv>
        )}
      </CartContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
