import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  decreaseCart,
  setCategoryTitle,
  setCurrencyType,
} from "../../redux/actions/actions";
import { Attribute, AttributeButton } from "../../styles/productDetails";
import { CartTypes } from "../../types";

class Cart extends React.Component<
  {
    setCategoryTitle: any;
    setCurrencyType: any;
    cart: any;
    decreaseCart: any;
    addToCart: any;
  },
  CartTypes
> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      categories: [],
      category: "all",
      currencies: [],
      currency: "USD",
    };
  }

  handleDecreaseCart(item: any) {
    this.props.decreaseCart(item);
  }

  increaseCartQuantity(item: any) {
    this.props.addToCart(item);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div
          style={{ width: "88%", margin: "10px auto", backgroundColor: "#fff" }}
        >
          <h3>CART</h3>
          <br />
          <hr />
          {this.state.cartItems?.length > 0 ? (
            this.state.cartItems.map(
              (item: {
                name: string;
                cartQuantity: number;
                gallery: any;
                attributes: [];
                brand: string;
              }) => (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <h2>
                        <b>{item.name}</b>
                      </h2>
                      <p>{item.brand}</p>
                      <p>
                        <b>$50.00</b>
                      </p>
                      <div>
                        {item.attributes.map((attr: any) => (
                          <>
                            <Attribute>{attr.name}:</Attribute>
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                              }}
                            >
                              {attr.type === "swatch" &&
                                attr.items.map((itm: any) => (
                                  <AttributeButton
                                    key={itm.id}
                                    style={{
                                      backgroundColor: `${itm.id}`,
                                      height: "30px",
                                      width: "45px",
                                      border: "1px solid black",
                                      cursor: "pointer",
                                    }}
                                  ></AttributeButton>
                                ))}

                              {attr.type !== "swatch" &&
                                attr.items.map((itm: any) => (
                                  <AttributeButton key={itm.id}>
                                    {itm.value}
                                  </AttributeButton>
                                ))}
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "10px",
                      }}
                    >
                      <div>
                        <button onClick={() => this.increaseCartQuantity(item)}>
                          +
                        </button>
                        <h4 style={{ textAlign: "center" }}>
                          {item.cartQuantity}
                        </h4>
                        <button onClick={() => this.handleDecreaseCart(item)}>
                          -
                        </button>
                      </div>
                      <div>
                        <img src={item.gallery[0]} width={90} height={110} />
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              )
            )
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
                Tax: <b>15$</b>
              </span>
              <span>
                Qty: <b>3</b>
              </span>
              <div>
                <span>
                  Total: <b>65$</b>
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
      </>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCategoryTitle: (category: string) =>
      dispatch(setCategoryTitle(category)),
    setCurrencyType: (currency: string) =>
      dispatch(setCurrencyType(currency.toString())),
    decreaseCart: (product: any) => dispatch(decreaseCart(product)),
    addToCart: (product: any) => dispatch(addToCart(product)),
  };
}

function mapStateToProps(state: any) {
  return {
    cart: state.cart.cartItems,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
