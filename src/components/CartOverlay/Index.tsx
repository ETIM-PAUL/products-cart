import React from "react";
import { connect } from "react-redux";
import {
  CartOverlayContainer,
  CartOverlayImage,
  CartOverlaySplit,
  OverlaySide,
  Button,
  ItemQuantityChange,
  CartOverlayBanner,
  CartDiv,
} from "../../styles/cartOverlay";
import { CartTypes, ItemProps } from "../../types";
import greaterThan from "../../img/greaterThan.svg";
import lessThan from "../../img/lessThan.svg";
import {
  Bold,
  ChangeImages,
  GalleryDiv,
  Heading2,
  NoStyleDiv,
} from "../../styles/cart";
import { CartOverlayProps } from "../../props";
import "../Product-Details/details.css";
import { mapStateToProps, mapDispatchToProps } from "./utils";
import ItemAttributes from "./ItemAttributes";
import ItemTotals from "./ItemTotals";

class CartOverlay extends React.Component<CartOverlayProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
  }
  increaseCartItemQuantity = (product: {}, attribute: any) => {
    this.props.addToCart({ product, attribute });
    this.props.getTotals();
  };

  decreaseCartItemQuantity = (product: {}, attribute: any) => {
    this.props.decreaseCart({ product, attribute });
    this.props.getTotals();
  };
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
                    <ItemAttributes {...this.props} item={item} />
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
          <ItemTotals
            {...this.props}
            totalAmount={this.props.totalAmount}
            display={this.props.display}
          />
        </CartOverlayContainer>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
