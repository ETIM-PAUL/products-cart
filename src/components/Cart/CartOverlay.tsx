import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  changeImageIndexDown,
  changeImageIndexUp,
  decreaseCart,
  getTotals,
} from "../../redux/cartSlice";
import { Attribute, AttributeButton, ViewBag } from "../../styles/cartOverlay";
import { CartTypes, ItemProps } from "../../types";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

class CartOverlay extends React.Component<
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
      num: 0,
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
        <div
          style={{
            width: "90%",
            margin: "auto",
            backgroundColor: "#fff",
            padding: "0 2px",
          }}
        >
          <b>My Bag: </b> {this.props.totalQuantity} items
          <br />
          {this.state.cartItems?.length > 0 ? (
            this.state.cartItems.map((item: ItemProps) => (
              <div key={item.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                  key={item.id}
                >
                  <div>
                    <p>{item.name}</p>
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
                              gap: "3px",
                              width: "20px",
                            }}
                          >
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
                                <AttributeButton
                                  key={attribute.id}
                                  style={
                                    item.selectedAttributes
                                      ?.map(
                                        (x: any) =>
                                          x.attr === attribute.id || x.itm.id
                                      )
                                      .toString()
                                      .includes(attribute.id)
                                      ? {
                                          backgroundColor: `${attribute.id}`,
                                          height: "15px",
                                          width: "20px",
                                          border: "3px solid red",
                                          cursor: "pointer",
                                        }
                                      : {
                                          backgroundColor: `${attribute.id}`,
                                          height: "15px",
                                          width: "20px",
                                          border: "1px solid black",
                                          cursor: "pointer",
                                        }
                                  }
                                ></AttributeButton>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <div style={{ marginTop: "13px", lineHeight: "20px" }}>
                      <button
                        onClick={() => this.increaseCartItemQuantity(item)}
                        style={{
                          width: "25px",
                          height: "20px",
                          backgroundColor: "#fff",
                          border: "1px solid black",
                          cursor: "pointer",
                        }}
                      >
                        <span style={{ fontSize: "15px" }}>+</span>
                      </button>
                      <h4 style={{ textAlign: "center" }}>
                        {item.cartQuantity}
                      </h4>
                      <button
                        style={{
                          width: "25px",
                          height: "20px",
                          backgroundColor: "#fff",
                          border: "1px solid black",
                          cursor: "pointer",
                        }}
                        onClick={() => this.decreaseCartItemQuantity(item)}
                      >
                        <span style={{ fontSize: "15px" }}>-</span>
                      </button>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        position: "relative",
                        marginTop: "11px",
                      }}
                    >
                      <img
                        src={item.gallery[item.imageIndex]}
                        width={90}
                        height={90}
                        style={{ objectFit: "fill" }}
                        alt="itemImg"
                      />
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
                          onClick={() => this.props.changeImageDown(item)}
                        />
                      </div>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "15px",
                }}
              >
                <b>Total</b>
                <b>{this.props.totalAmount}</b>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "60px",
                }}
              >
                <Link to={"/cart"}>
                  <ViewBag>VIEW BAG</ViewBag>
                </Link>
                <button
                  style={{
                    width: "100px",
                    height: "30px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                  }}
                >
                  CHECK OUT
                </button>
              </div>
            </div>
          )}
          {/* <div style={{ marginBottom: "90px" }} /> */}
        </div>
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
