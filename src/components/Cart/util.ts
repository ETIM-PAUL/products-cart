import { decreaseCart, addToCart, getTotals, changeImageIndexUp, changeImageIndexDown } from "../../redux/cartSlice";
import { AppDispatch, RootState } from "../../redux/store";

export function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    decreaseCart: (product: any) => dispatch(decreaseCart(product)),
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
    changeImageUp: (item: any) => dispatch(changeImageIndexUp(item)),

    changeImageDown: (item: any) => dispatch(changeImageIndexDown(item)),
  };
}

export const mapStateToProps = (state: RootState) => {
  return {
    cart: state.cart.cartItems,
    totalQuantity: state.cart.cartTotalQuantity,
    totalAmount: state.cart.cartTotalAmount,
    currency: state.selection["selectedCurrency"],
  };
};
