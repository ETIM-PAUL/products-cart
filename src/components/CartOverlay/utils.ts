import { decreaseCart, addToCart, getTotals, changeImageIndexUp, changeImageIndexDown } from "../../redux/cartSlice";

export function mapDispatchToProps(dispatch: any) {
  return {
    decreaseCart: (product: any) => dispatch(decreaseCart(product)),
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
    changeImageUp: (item: any) => dispatch(changeImageIndexUp(item)),

    changeImageDown: (item: any) => dispatch(changeImageIndexDown(item)),
  };
}

export function mapStateToProps(state: any) {
  return {
    cart: state.cart.cartItems,
    totalQuantity: state.cart.cartTotalQuantity,
    totalAmount: state.cart.cartTotalAmount,
    currency: state.selection["selectedCurrency"],
  };
}