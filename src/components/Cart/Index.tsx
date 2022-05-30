import React from "react";
import { connect } from "react-redux";
import { NoStyleDiv, CartContainer, Heading } from "../../styles/cart";
import { CartTypes, ItemProps } from "../../types";
import { CartProps } from "../../props";
import "../Product-Details/details.css";
import { mapStateToProps, mapDispatchToProps } from "./util";
import Order from "./Order";
import Items from "./Items";

class Cart extends React.Component<CartProps, CartTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      cartItems: this.props.cart,
      attribute: "",
    };
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
            <Items
              item={item}
              currency={this.props.currency}
              changeImageUp={this.props.changeImageUp}
              changeImageDown={this.props.changeImageDown}
              decreaseCart={this.props.decreaseCart}
              getTotals={this.props.getTotals}
              addToCart={this.props.addToCart}
            />
          ))
        ) : (
          <NoStyleDiv>No Items in Cart</NoStyleDiv>
        )}
        {this.props.cart?.length > 0 && (
          <Order
            currency={this.props.currency}
            totalAmount={this.props.totalAmount}
            totalQuantity={this.props.totalQuantity}
          />
        )}
      </CartContainer>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
