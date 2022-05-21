import { addToCart, getTotals } from "../../redux/cartSlice";

export function mapStateToProps(state: any) {
  return {
    currency: state.selection["selectedCurrency"],
  };
}
export function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
  };
}