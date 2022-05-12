import React from "react";
import { connect } from "react-redux";
import { addToCart, decreaseCart, getTotals } from "../../redux/cartSlice";
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
} from "../../styles/cart";
import { CartTypes, ItemProps } from "../../types";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { AppDispatch, RootState } from "../../redux/store";
import {
  changeImageIndexUp,
  changeImageIndexDown,
} from "../..//redux/cartSlice";
import {
  ProductBrand,
  ProductName,
  ProductPrice,
} from "../../styles/productDetails";
import { CartProps } from "../../props";

class Cart extends React.Component<CartProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
  }

  decreaseCartItemQuantity(item: any) {
    this.props.decreaseCart(item);
    this.props.getTotals();
  }

  increaseCartItemQuantity(product: any) {
    this.props.addToCart({ product });
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
              <AttributesContainer>
                <CartRow>
                  <NoStyleDiv>
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

                    <NoStyleDiv>
                      {item.attributes.map((attr: any) => (
                        <NoStyleDiv key={attr.id}>
                          <Attribute>{attr.name}:</Attribute>
                          <AttributesDiv>
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
                          </AttributesDiv>
                        </NoStyleDiv>
                      ))}
                    </NoStyleDiv>
                  </NoStyleDiv>

                  <CartSplit>
                    <NoStyleDiv>
                      <ChangeItemQuantity
                        onClick={() => this.increaseCartItemQuantity(item)}
                      >
                        <span style={{ fontSize: "25px" }}>+</span>
                      </ChangeItemQuantity>
                      <h4 style={{ textAlign: "center" }}>
                        {item.cartQuantity}
                      </h4>
                      <ChangeItemQuantity
                        onClick={() => this.decreaseCartItemQuantity(item)}
                      >
                        <span style={{ fontSize: "25px" }}>-</span>
                      </ChangeItemQuantity>
                    </NoStyleDiv>
                    <RelativePosition>
                      <img
                        src={item.gallery[item.imageIndex]}
                        width={200}
                        height={150}
                        alt="itemImg"
                      />

                      {item.gallery?.length > 1 && (
                        <GalleryDiv>
                          <FaLessThan
                            style={{ backgroundColor: "black", color: "white" }}
                            onClick={() => this.props.changeImageDown(item)}
                          />
                          <FaGreaterThan
                            style={{ backgroundColor: "black", color: "white" }}
                            onClick={() => this.props.changeImageUp(item)}
                          />
                        </GalleryDiv>
                      )}
                    </RelativePosition>
                  </CartSplit>
                </CartRow>
              </AttributesContainer>
              <hr />
            </NoStyleDiv>
          ))
        ) : (
          <NoStyleDiv>No Items in Cart</NoStyleDiv>
        )}
        {this.props.cart?.length > 0 && (
          <OrderDiv
            style={{
              display: "grid",
              marginTop: "30px",
            }}
          >
            <Span>
              Tax 21%: <Bold>{this.props.currency}15</Bold>
            </Span>
            <Span>
              Qty: <Bold>{this.props.totalQuantity}</Bold>
            </Span>
            <NoStyleDiv>
              <Span>
                Total:{" "}
                <b>
                  {this.props.currency}
                  {this.props.totalAmount}
                </b>
              </Span>
            </NoStyleDiv>
            <OrderButton>Order</OrderButton>
          </OrderDiv>
        )}
      </CartContainer>
    );
  }
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    decreaseCart: (product: any) => dispatch(decreaseCart(product)),
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
    changeImageUp: (item: any) => dispatch(changeImageIndexUp(item)),

    changeImageDown: (item: any) => dispatch(changeImageIndexDown(item)),
  };
}

const mapStateToProps = (state: RootState) => {
  return {
    cart: state.cart.cartItems,
    totalQuantity: state.cart.cartTotalQuantity,
    totalAmount: state.cart.cartTotalAmount,
    currency: state.selection["selectedCurrency"],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
