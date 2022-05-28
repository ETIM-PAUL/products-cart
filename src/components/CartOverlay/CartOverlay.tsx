import React from "react";
import { connect } from "react-redux";
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
  AttributesBanner,
} from "../../styles/cartOverlay";
import { CartTypes, ItemProps } from "../../types";
import greaterThan from "../../img/greaterThan.svg";
import lessThan from "../../img/lessThan.svg";
import { Link } from "react-router-dom";
import {
  Bold,
  ChangeImages,
  GalleryDiv,
  Heading2,
  NoStyleDiv,
  Paragraph,
} from "../../styles/cart";
import { CartOverlayProps } from "../../props";
import { ProductBrand, ProductName } from "../../styles/cart";
import "../Product-Details/details.css";
import { mapStateToProps, mapDispatchToProps } from "./utils";

class CartOverlay extends React.Component<CartOverlayProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
  }

  increaseCartItemQuantity(product: {}, attribute: any) {
    this.props.addToCart({ product, attribute });
    this.props.getTotals();
  }

  decreaseCartItemQuantity(product: {}, attribute: any) {
    this.props.decreaseCart({ product, attribute });
    this.props.getTotals();
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (props.cart !== state.cartItems) {
      return {
        cartItems: props.cart,
      };
    }
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
                      <ProductBrand>{item.brand}</ProductBrand>
                      <ProductName>{item.name}</ProductName>
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

                      <AttributesBanner>
                        {item.attributes.map((attr: any) => (
                          <NoStyleDiv key={attr.id}>
                            <Attribute>{attr.name}:</Attribute>
                            <CartAttributes>
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
                            </CartAttributes>
                          </NoStyleDiv>
                        ))}
                      </AttributesBanner>
                    </ItemsCart>
                    <OverlaySide>
                      <ItemQuantityChange>
                        <Button
                          onClick={() =>
                            this.increaseCartItemQuantity(
                              item,
                              item.selectedAttributes
                            )
                          }
                        >
                          <span>+</span>
                        </Button>
                        <Heading2>{item.cartQuantity}</Heading2>
                        <Button
                          onClick={() =>
                            this.decreaseCartItemQuantity(
                              item,
                              item.selectedAttributes
                            )
                          }
                        >
                          <span>-</span>
                        </Button>
                      </ItemQuantityChange>
                      <CartOverlaySplit>
                        <img
                          src={item.gallery[item.imageIndex]}
                          width={100}
                          height={127}
                          alt="itemImg"
                        />
                        <CartOverlayImage>
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
                        </CartOverlayImage>
                      </CartOverlaySplit>
                    </OverlaySide>
                  </CartOverlayBanner>
                  <hr />
                </NoStyleDiv>
              ))
            ) : (
              <NoStyleDiv>No Items in Cart, Yet.</NoStyleDiv>
            )}
          </CartDiv>
          <TotalAndButton>
            <TotalDiv>
              <Bold>Total</Bold>
              <Bold>
                {this.props.currency}
                {this.props.totalAmount}
              </Bold>
            </TotalDiv>
            <ButtonDiv>
              <Link to={"/cart"}>
                <ViewBag onClick={this.props.display}>VIEW BAG</ViewBag>
              </Link>
              <SecondButton>CHECK OUT</SecondButton>
            </ButtonDiv>
          </TotalAndButton>
        </CartOverlayContainer>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
