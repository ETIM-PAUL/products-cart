import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  changeImageIndexDown,
  changeImageIndexUp,
  decreaseCart,
  getTotals,
} from "../../redux/cartSlice";
import {
  Attribute,
  AttributeButton,
  ViewBag,
  CartOverlayContainer,
  CartAttributes,
  CartOverlayImage,
  CartOverlaySplit,
  OverlaySide,
  Button,
  ItemQuantityChange,
  CartOverlayBanner,
  SecondButton,
  ButtonDiv,
  TotalDiv,
  TotalAndButton,
  AttributeSwatch,
  ItemsCart,
  CartDiv,
} from "../../styles/cartOverlay";
import { CartTypes, ItemProps } from "../../types";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Bold, GalleryDiv, NoStyleDiv, Paragraph } from "../../styles/cart";
import { CartOverlayProps } from "../../props";

class CartOverlay extends React.Component<CartOverlayProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
  }

  decreaseCartItemQuantity(item: {}) {
    this.props.decreaseCart(item);
    this.props.getTotals();
  }

  increaseCartItemQuantity(product: {}) {
    this.props.addToCart({ product });
    this.props.getTotals();
  }

  componentDidMount() {}
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
      <>
        <CartOverlayContainer>
          <Bold>My Bag: </Bold> {this.props.totalQuantity} items
          <br />
          <hr />
          <CartDiv>
            {this.state.cartItems?.length > 0 ? (
              this.state.cartItems.map((item: ItemProps) => (
                <NoStyleDiv key={item.id}>
                  <CartOverlayBanner key={item.id}>
                    <ItemsCart>
                      <Paragraph>{item.name}</Paragraph>
                      <Paragraph>{item.brand}</Paragraph>
                      {item.prices?.map(
                        (p) =>
                          p.currency.symbol === this.props.currency && (
                            <Paragraph key={p.currency.label}>
                              <Bold>
                                {p.currency.symbol}
                                {p.amount}
                              </Bold>
                            </Paragraph>
                          )
                      )}

                      <NoStyleDiv>
                        {item.attributes.map((attr: any) => (
                          <NoStyleDiv key={attr.id}>
                            <Attribute>{attr.name}:</Attribute>
                            <CartAttributes>
                              {attr.type !== "swatch" &&
                                attr.items.map((attribute: any) => (
                                  <AttributeButton
                                    key={attribute.id}
                                    style={
                                      item.selectedAttributes.find(
                                        (x: any) =>
                                          x.attr === attr.id &&
                                          x.itm.id === attribute.id
                                      ) && {
                                        backgroundColor: "black",
                                        color: "white",
                                      }
                                    }
                                  >
                                    {attribute.value}
                                  </AttributeButton>
                                ))}
                              {attr.type === "swatch" &&
                                attr.items.map((attribute: any) => (
                                  <AttributeSwatch
                                    key={attribute.id}
                                    style={
                                      item.selectedAttributes.find(
                                        (x: any) =>
                                          x.attr === attr.id &&
                                          x.itm.id === attribute.id
                                      )
                                        ? {
                                            backgroundColor: `${attribute.id}`,
                                            border: "2px solid red",
                                          }
                                        : {
                                            backgroundColor: `${attribute.id}`,
                                          }
                                    }
                                  ></AttributeSwatch>
                                ))}
                            </CartAttributes>
                          </NoStyleDiv>
                        ))}
                      </NoStyleDiv>
                    </ItemsCart>
                    <OverlaySide>
                      <ItemQuantityChange>
                        <Button
                          onClick={() => this.increaseCartItemQuantity(item)}
                        >
                          <span style={{ fontSize: "15px" }}>+</span>
                        </Button>
                        <h4 style={{ textAlign: "center" }}>
                          {item.cartQuantity}
                        </h4>
                        <Button
                          onClick={() => this.decreaseCartItemQuantity(item)}
                        >
                          <span style={{ fontSize: "15px" }}>-</span>
                        </Button>
                      </ItemQuantityChange>
                      <CartOverlaySplit>
                        <img
                          src={item.gallery[item.imageIndex]}
                          width={90}
                          height={90}
                          style={{ objectFit: "fill" }}
                          alt="itemImg"
                        />
                        <CartOverlayImage>
                          {item.gallery?.length > 1 && (
                            <GalleryDiv>
                              <FaLessThan
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onClick={() => this.props.changeImageDown(item)}
                              />
                              <FaGreaterThan
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                }}
                                onClick={() => this.props.changeImageDown(item)}
                              />
                            </GalleryDiv>
                          )}
                        </CartOverlayImage>
                      </CartOverlaySplit>
                    </OverlaySide>
                  </CartOverlayBanner>
                  <hr />
                </NoStyleDiv>
              ))
            ) : (
              <NoStyleDiv>No Items in Cart</NoStyleDiv>
            )}
          </CartDiv>
          {this.props.cart?.length > 0 && (
            <TotalAndButton>
              <TotalDiv>
                <Bold>Total</Bold>
                <Bold>{this.props.totalAmount}</Bold>
              </TotalDiv>
              <ButtonDiv>
                <Link to={"/cart"}>
                  <ViewBag onClick={this.props.display}>VIEW BAG</ViewBag>
                </Link>
                <SecondButton>CHECK OUT</SecondButton>
              </ButtonDiv>
            </TotalAndButton>
          )}
        </CartOverlayContainer>
      </>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    decreaseCart: (product: any) => dispatch(decreaseCart(product)),
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
    changeImageUp: (item: any) => dispatch(changeImageIndexUp(item)),

    changeImageDown: (item: any) => dispatch(changeImageIndexDown(item)),
  };
}

function mapStateToProps(state: any) {
  return {
    cart: state.cart.cartItems,
    totalQuantity: state.cart.cartTotalQuantity,
    totalAmount: state.cart.cartTotalAmount,
    currency: state.selection["selectedCurrency"],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
