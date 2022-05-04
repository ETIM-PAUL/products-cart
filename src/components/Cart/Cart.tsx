import React from "react";
import { connect } from "react-redux";
// import { setCategory, setCurrency } from "../../redux/selectSlice";

import { addToCart, decreaseCart, getTotals } from "../../redux/cartSlice";
import { Attribute, AttributeButton } from "../../styles/cart";
import { CartTypes, ItemProps } from "../../types";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { AppDispatch, RootState } from "../../app/store";
import {
  changeImageIndexUp,
  changeImageIndexDown,
} from "../..//redux/cartSlice";

class Cart extends React.Component<
  {
    cart: [];
    decreaseCart: any;
    addToCart: any;
    totalQuantity: number;
    totalAmount: number;
    getTotals: any;
    currency: string;
    changeImageUp: any;
    changeImageDown: any;
  },
  CartTypes
> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      num: 1,
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

  componentWill() {}

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
      <div
        style={{
          width: "88%",
          margin: "auto",
          backgroundColor: "#fff",
        }}
      >
        <h3>CART</h3>
        <br />
        <hr />
        {this.state.cartItems?.length > 0 ? (
          this.state.cartItems.map((item: ItemProps) => (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <h2>
                    <b>{item.name}</b>
                  </h2>
                  <p>{item.brand}</p>
                  {item.prices?.map(
                    (p) =>
                      p.currency.label === this.props.currency && (
                        <p key={p.currency.label}>
                          <b>
                            {p.currency.symbol}
                            {p.amount}
                          </b>
                        </p>
                      )
                  )}

                  <div>
                    {item.attributes.map((attr: any) => (
                      <div key={attr.id}>
                        <Attribute>{attr.name}:</Attribute>
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          {attr.type === "swatch" &&
                            attr.items.map((attribute: any) => (
                              <AttributeButton
                                key={attribute.id}
                                style={
                                  item.selectedAttributes.find(
                                    (x: any) =>
                                      x.attr === attr.id &&
                                      x.itm.id === attribute.id
                                  )
                                    ? {
                                        backgroundColor: `${attribute.id}`,
                                        height: "20px",
                                        width: "20px",
                                        border: "3px solid red",
                                        cursor: "pointer",
                                      }
                                    : {
                                        backgroundColor: `${attribute.id}`,
                                        height: "20px",
                                        width: "20px",
                                        border: "1px solid black",
                                        cursor: "pointer",
                                      }
                                }
                              ></AttributeButton>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    lineHeight: "60px",
                    marginTop: "15px",
                    maxHeight: "100%",
                  }}
                >
                  <div>
                    <button
                      onClick={() => this.increaseCartItemQuantity(item)}
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#fff",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>+</span>
                    </button>
                    <h4 style={{ textAlign: "center" }}>{item.cartQuantity}</h4>
                    <button
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#fff",
                        border: "1px solid black",
                        cursor: "pointer",
                      }}
                      onClick={() => this.decreaseCartItemQuantity(item)}
                    >
                      <span style={{ fontSize: "25px" }}>-</span>
                    </button>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.gallery[item.imageIndex]}
                      width={200}
                      height={205}
                      alt="itemImg"
                    />

                    {item.gallery?.length > 1 && (
                      <div
                        style={{
                          display: "flex",
                          gap: "4px",
                          position: "absolute",
                          bottom: "15%",
                          right: "6%",
                        }}
                      >
                        <FaLessThan
                          style={{ backgroundColor: "black", color: "white" }}
                          onClick={() => this.props.changeImageDown(item)}
                        />
                        <FaGreaterThan
                          style={{ backgroundColor: "black", color: "white" }}
                          onClick={() => this.props.changeImageUp(item)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div>No Items in Cart</div>
        )}
        {this.props.cart?.length > 0 && (
          <div
            style={{
              display: "grid",
              marginTop: "30px",
            }}
          >
            <span>
              Tax: <b>15</b>
            </span>
            <span>
              Qty: <b>{this.props.totalQuantity}</b>
            </span>
            <div>
              <span>
                Total: <b>{this.props.totalAmount}</b>
              </span>
            </div>
            <button
              style={{
                width: "132px",
                height: "30px",
                backgroundColor: "green",
                color: "white",
                border: "none",
              }}
            >
              Order
            </button>
          </div>
        )}
      </div>
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
