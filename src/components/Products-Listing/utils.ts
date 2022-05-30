import { addToCart, getTotals } from "../../redux/cartSlice";

export  function mapStateToProps(state: any) {
  return {
    category: state.selection["selectedCategory"],
    currency: state.selection["selectedCurrency"],
  };
}

export function mapDispatchToProps(dispatch: any) {
  return {
    addToCart: (product: any) => dispatch(addToCart(product)),
    getTotals: () => dispatch(getTotals()),
  };
}